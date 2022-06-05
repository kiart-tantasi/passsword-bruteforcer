const fs = require("fs");

const passwordGenerator = (characters, currentPassword, yourPassword) => {
    const length = yourPassword.length;
    
    if (characters === null || characters.length === 0) throw new Error("characters is null.");

    if (currentPassword.length === length) {
        console.log(currentPassword);

        if (currentPassword === yourPassword) {
            const hackResult = "PASSWORD FOUND - " + yourPassword + "\nstart at " + startHackTime + "\ndone at " + new Date().toUTCString();
            fs.writeFileSync("hack-result.txt", hackResult, (err) => { if (err) console.log(err); });
            throw new Error("FOUND PASSWORD");
        };

        return fs.appendFileSync("passwords.txt", (currentPassword + "\n"), (err) => {
            if (err) console.log("appendFileError:", err);
        });
    };
    
    let charactersToIterate = characters;
    while (charactersToIterate.length > 0) {

        const alphabetIndex = Math.floor(Math.random() * charactersToIterate.length);
        const alphabet = charactersToIterate.substring(alphabetIndex, alphabetIndex + 1);
        const index = characters.indexOf(alphabet);
        charactersToIterate = charactersToIterate.substring(0, alphabetIndex) + charactersToIterate.substring(alphabetIndex + 1, charactersToIterate.length);

        const newCurrentPassword = ((currentPassword) ? currentPassword : "") + characters[index];
        passwordGenerator(characters, newCurrentPassword, yourPassword);
    };
};

// START APP
const characters = "0123456789";
const startHackTime = new Date().toUTCString();
fs.writeFileSync("passwords.txt", "", (err) => { if (err) console.log(err); })
passwordGenerator(characters, "", "12575");
