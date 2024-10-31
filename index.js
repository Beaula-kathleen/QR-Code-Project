import inquirer from "inquirer";
import { createWriteStream, readFile, writeFile } from "fs";
import { image} from "qr-image";
// 1. Use the inquirer npm package to get user input.
const { url } = await inquirer.prompt({
  type: "string",
  message: "Enter the URL:",
  name: "url",
});
// 2. Use the npm i qr-image npm package to turn the user entered URL into a QR code image.
const img = image(url);
img.pipe(createWriteStream('userInput.png'))
// 3. Create a txt file to save the user input using the native fs node module.
writeFile("message.txt", url, (err) => {
  if (err) {
    throw err;
  }
  console.log("FILE SAVED");
});
readFile("./message.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
