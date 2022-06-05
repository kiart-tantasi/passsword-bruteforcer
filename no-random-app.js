const fs = require("fs");

const passwordGenerator = (characters, currentPassword, lengthOfPassword) => {
    if (currentPassword.length === lengthOfPassword) return console.log(currentPassword);

    for (let i = 0; i < characters.length; i++) {
        passwordGenerator(characters, currentPassword + characters[i], lengthOfPassword);
    };
};

// START APP
const startTime = new Date().toUTCString();

length = 5;
passwordGenerator("0123456789", "", length);

const endTime = new Date().toUTCString();
const secondsTaken = (new Date(endTime).getTime() - new Date(startTime).getTime()) / 1000;
fs.appendFileSync("result.txt", "length - " + length + "\nstart at: " + startTime + "\nend at: " + endTime + "\nseconds: " + secondsTaken + "\n\n");
