import axios from "axios";

export const createPost = (post) => {
    return axios.post('http://localhost:3001/posts/new', post);
}
export const getPosts = () => {
    return axios.get('http://localhost:3001/posts');
}