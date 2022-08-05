import axios from "axios";

export type UserData = {
    dateCreated: Date,
    dateModified: Date,
    email: string,
    enabled: boolean,
    authorities: string[],
}

export const signInAuthUserWithUsernameAndPassword = async (username: string, password: string) => {
    if (!username || !password) return

    return await signInWithUsernameAndPassword(username, password)
}

export const signInWithUsernameAndPassword = (username: string, password: string) => {
    return axios.post('http://localhost:8080/wp-json/hm/v1/authenticate', {
        username,
        password,
    }).then(response => {
        return response.data;
    })
}