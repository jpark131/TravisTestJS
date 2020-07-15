console.log('Before');
getUser(1, getRepositoriess);
console.log('After');

function getRepositoriess(user){
    getRepositories(user.gitHubUsername, getCommitss);
}

function getCommitss(repos){
    getCommits(repos[0], displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading a user from a database...')
        callback({ id: id, gitHubUsername: 'jake' });
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(()=>{
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
   
}

function getCommits(repo, callback){
    setTimeout(()=>{
        console.log('Calling GitHub API...');
        callback(['commit']);
    }, 2000);
   
}
