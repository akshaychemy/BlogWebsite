import axios from 'axios';

const API_URL='http://localhost:5000/api';

const regiter = async (userData) =>{
    const response = await axios.post (`${API_URL}/auth/register`, userData);
    return response.data;
}

const login = async (userData) =>{
    const response = await axios.post (`${API_URL}/auth/login`, userData);
    return response.data;
}

const createPost = async (postData,token) =>{

    const config ={
        headers:{
            'Authorization':`Bearer ${token}`
        }
    };

    const response = await axios.post (`${API_URL}/posts`, postData,config);
    return response.data;
}

const getPosts = async () =>{
    const response = await axios.get (`${API_URL}/posts`);
    return response.data;
}


export default{
    regiter,
    login,
    createPost,
    getPosts,
}