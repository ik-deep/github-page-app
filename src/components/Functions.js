import axios from "axios";

export const fetchUserData = (username) => {
    // https://api.github.com/repos/ik-deep/github-page-app/events

    const userData = axios.get(`https://api.github.com/users/${username}`)
        .then(res => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
  
    return userData;
}

export const fetchRepoData = (username) => {
    const userData = axios.get(`https://api.github.com/repos/${username}`)
        .then(res => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
  
    return userData;
}
