const createIssue = (res, req) => {
    res.send("issue created!");
}

const updateIssuebyId = (req, res) => {
    res.send("issue updated!")
}

const deleteIssueById = (req, res) => {
    res.send("Issue deleted!");
}

const getAllIssues = (req, res) => {
    res.send("all issues feteched!");
}

const getAllIssueById = (req, res) => {
    res.send("issue fetched by id");
}

module.exports = {
    createIssue,
    updateIssuebyId,
    deleteIssueById,
    getAllIssues,
    getAllIssueById

}