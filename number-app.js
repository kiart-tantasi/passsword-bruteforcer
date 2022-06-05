const fs = require("fs");

const startTime = new Date().toUTCString();

const number = 99_999;

for (let i = 0; i < number; i++) {
    console.log(i);
};


const endTime = new Date().toUTCString();
const secondsTaken = (new Date(endTime).getTime() - new Date(startTime).getTime()) / 1000;
fs.appendFileSync("number-result.txt", "number - " + number + "\nstart at: " + startTime + "\nend at: " + endTime + "\nseconds: " + secondsTaken + "\n\n");
