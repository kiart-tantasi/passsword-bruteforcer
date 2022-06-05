const fs = require("fs");

const passwordGenerator = (characters, currentPassword, yourPassword) => {
    const length = yourPassword.length;
    
    if (characters === null || characters.length === 0) throw new Error("characters is null.");

    if (currentPassword.length === length) {
        console.log(currentPassword);

        if (currentPassword === yourPassword) {
            const endTime = new Date().toUTCString();
            const secondsTaken = (new Date(endTime).getTime() - new Date(startTime).getTime()) / 1000;
            const hackResult = "FOUND PASSWORD - " + currentPassword + "\nstart at: " + startTime + "\nend at: " + endTime + "\nseconds: " + secondsTaken + "\n\n";
            fs.appendFile("hack-result.txt", hackResult, (error) => { if(error) console.log(err); });
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

const startTime = new Date().toUTCString();
fs.writeFileSync("passwords.txt", "");
try {
    passwordGenerator("0123456789", "", "12575");
} catch (error) {
    console.log("\n\nDONE");
};
