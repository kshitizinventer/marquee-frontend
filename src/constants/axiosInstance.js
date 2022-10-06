import axios from 'axios';

const backendApi="http://localhost:5000"

export default () => {

    const axiosInstance = axios.create({
        baseURL: backendApi,
    });

    return axiosInstance;
}