import { exec, spawn } from "child_process";
import * as drivelist from "drivelist";
import { access, readFile } from "fs/promises";

try {
  await access(`${import.meta.dirname}/config.json`);
} catch (err) {
  console.log(err);
  log("Something went wrong while reading the JSON config file, exiting...");
  process.exit(1);
}

const { drive, timeToCheck } = JSON.parse(
  await readFile(`${import.meta.dirname}/config.json`)
);
let WSL;
let running = false;

startWSL();
setInterval(async () => {
  if (running) {
    const drivePresent = await checkDrive();
    if (!drivePresent) {
      log("Drive has been disconnected, stopping WSL...");
      killWSL();
      running = false;
    }
  } else {
    startWSL();
  }
}, timeToCheck * 1000);

async function startWSL() {
  const drivePresent = await checkDrive();
  if (!drivePresent) return log("Drive not connected, checking later...");

  running = true;
  log("Drive detected, attaching to WSL process...");
  exec(`wsl --mount ${drive} --bare`);
  setTimeout(() => {
    log("Attached drive.");
    WSL = spawn("wsl");
    log("Started WSL.");
  }, 10000);
}

function killWSL() {
  WSL.kill();
  exec("wsl --shutdown");
}

async function checkDrive() {
  const list = await drivelist.list();
  return list.some((drv) => drv.device == drive);
}

function log(string) {
  console.log(`${new Date().toUTCString()} ${string}`);
}

process.on("SIGINT", () => {
  log("Manually interrupted program, shutting down WSL...");
  killWSL();
  setTimeout(() => {
    process.exit();
  }, 5000);
});
