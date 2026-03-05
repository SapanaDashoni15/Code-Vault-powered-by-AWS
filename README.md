# Code-Vault-powered-by-AWS

A GitHub-inspired version control platform that simulates core Git workflows through a custom command line interface and a web-based interface. The system allows users to initialize repositories, commit changes, push and pull updates, revert to previous states, and manage repository history.

This project combines a CLI-based Git workflow with a modern web interface, backed by a Node.js server, MongoDB database, and Amazon S3 storage for versioned file management.

### Project Architecture

The project is divided into two main parts.

**Frontend** - Built using React to provide a simple interface for interacting with repositories and viewing repository activity.

**Backend** - Built with Node.js and Express to handle repository operations, CLI commands, file storage, and database interactions.

**Storage**

MongoDB – stores repository metadata, commit history, and user activity

Amazon S3 – stores repository files and versioned snapshots



### Project Structure
**Backend** <br/>
backend/ <br/>
│ <br/>
├── commands/  <br/>
├── controllers/ <br/>
├── routes/ <br/>
├── config/ <br/>
├── utils/ <br/>
└── index.js <br/>
<br/>
Frontend <br/>
frontend/ <br/>
│ <br/>
├── src/ <br/>
│   ├── components/ <br/>
│   ├── pages/ <br/>
│   ├── assets/ <br/>
│   └── App.jsx <br/>
└── package.json <br/>

### How It Works

-The user runs a command through the CLI. <br/>
-Yargs parses the command and arguments. <br/>
-The backend processes the command. <br/>
-Repository files are stored in Amazon S3. <br/>
-Repository metadata and commit history are saved in MongoDB. <br/>
-The React frontend allows users to visualize repository activity. <br/>

### Installation
1. Clone the repositories

Backend - git clone https://github.com/yourusername/github-clone-backend

Frontend - git clone https://github.com/yourusername/github-clone-frontend

2. Install dependencies

**Backend**
cd backend
npm install

**Frontend**
cd frontend
npm install

3. Setup environment variables

Create a .env file in the backend directory.

Example:

PORT=5000
MONGODB_URI=your_mongodb_connection
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
AWS_BUCKET_NAME=your_bucket_name

4. Run the application

Backend - npm start

Frontend - npm run dev
