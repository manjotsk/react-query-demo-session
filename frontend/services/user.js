// get user promise
import axios from "axios";

export const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'John',
                age: 33
            });
        }, 3000);
    });
}

export const createUser = (user) => {
    return axios.post('/users', user);
}