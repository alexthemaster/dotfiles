import { confirm, number, select } from "@inquirer/prompts";
import * as drivelist from "drivelist";
import { access, writeFile } from "fs/promises";

try {
  await access(`${import.meta.dirname}/config.json`);

  const answer = await confirm({
    message: "There seems to be a config present, continue?",
    name: "answer",
  });

  if (!answer) {
    console.log("Quitting...");
    process.exit();
  }
} catch (err) {}

const drives = (await drivelist.list()).map((drive) => {
  return {
    name: `${drive.description} (Removable: ${drive.isRemovable}), ${Math.round(
      drive.size / 1000000000
    )}GB`,
    value: drive.device,
  };
});

const drive = await select({
  message: "Which drive would you like to monitor and mount to WSL?",
  choices: drives,
});

const timeToCheck = await number({
  message: "How often to check if the drive is still connected? (in seconds)",
  default: "10",
});

await writeFile(
  `${import.meta.dirname}/config.json`,
  JSON.stringify({ drive, timeToCheck })
);
console.log("Successfully saved config.");
