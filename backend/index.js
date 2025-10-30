const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv))

// command 1
.command("init", "Initialise a new repo", {}, initRepo)    

// command 2
.command("add <file>", "Add a file to the repo", (yargs)=> {yargs.positional("file", {
    describe: "File to add to the staging area",
    type: "string",
});
} , 

(argv) => {
    addRepo(argv.file);
}

)

// command 3
.command("commit <message>", "Commit the staged files", (yargs)=>{
    yargs.positional("message", {
        describe: "Commit msg", 
        type : "string",
    });
} , 
(argv)=>{
    commitRepo(argv.message);
}
)

// command 4
.command("push", "push commits to S3", {}, pushRepo)

// command 5
.command("pull", "pull commits from S3", {}, pullRepo)

// command 6
.command("revert <commitID>", "Revert the specified commit", (yargs)=>{
    yargs.positional("commitID", {
        describe: "commit id to revert to",
        type: "string",
    });
} , 
(argv)=>{
    revertRepo(argv.commitID);
}

)

.demandCommand(1, "You need atleast one command")
.help().argv;