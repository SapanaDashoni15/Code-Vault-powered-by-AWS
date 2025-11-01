const createRepository = (req, res) =>{
    res.send("Repo created!");
}

const getAllRepositories = (req, res) =>{
    res.send("All repositories fetched!")
}

const fetchRepositoryById = (req, res) =>{
    res.send("repo details fetched!!");
}

const fetchRepositoryByName = (req, res) =>{
    res.send("repo details fetched!!");
}

const fetchRepositoryForCurrentUser = (req, res) =>{
    res.send("repo details fetched!!");
}

const updateRepositoryById = (res, req) => {
    res.send("repository updated!");
}

const toggleRepositoryById = (res, req) => {
    res.send("repository toggled!");
}

const deleteRepositoryById = (res, req) => {
    res.send("repository deleted");
}


module.exports = {
    createRepository,
    getAllRepositories,
    fetchRepositoryById,
    fetchRepositoryByName,
    fetchRepositoryForCurrentUser,
    updateRepositoryById,
    toggleRepositoryById,
    deleteRepositoryById
}
