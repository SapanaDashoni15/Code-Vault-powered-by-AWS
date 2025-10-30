const fs = require("fs").promises;
const path = require("path");

async function addRepo(filePath) {
    
    const repoPath = path.resolve(process.cwd(), ".codeVault");
    const stagingPath = path.join(repoPath, "staging");

    try {
        await fs.mkdir(stagingPath, {recursive: true});
        const fileName = path.basename(filePath);
        await fs.copyFile(fileName, path.join(stagingPath, fileName));
        console.log(`File ${fileName} is added to staging area.`);
    }   
    catch(err) {
        console.error("Error staging file", err);

    }
}

module.exports = { addRepo };