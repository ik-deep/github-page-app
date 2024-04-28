import axios from "axios";

export const fetchUserData = (username) => {
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
    const userData = axios.get(`https://api.github.com/${username}/tree/main`)
    // https://github.com/shananasim16/Amazon-clone/tree/main
        .then(res => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
  
    return userData;
}
