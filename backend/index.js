const express = require("express");
const dotenv = require("dotenv"); // for accessing provate variable
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require("http");
const {Server} = require("socket.io");


const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

dotenv.config();

yargs(hideBin(process.argv))

.command("start", "Start a new server", {}, startServer)    


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


function startServer() {
    
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(bodyParser.json());
    app.use(express.json());

    const mongoURI = process.env.MONGODB_URI;

    mongoose
        .connect(mongoURI)
        .then(() => console.log("MongoDB is connected!"))
        .catch((err) => console.log("unable to connect : ", err));

    app.use(cors({origin: "*"}));

    app.get("/", (req, res) => {
        res.send("welcome!");
    } );

    let user = "test";
  const httpServer = http.createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("joinRoom", (userID) => {
      user = userID;
      console.log("=====");
      console.log(user);
      console.log("=====");
      socket.join(userID);
    });
  });

  const db = mongoose.connection;

  db.once("open", async () => {
    console.log("CRUD operations called");
    // CRUD operations
  });

  httpServer.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
}
