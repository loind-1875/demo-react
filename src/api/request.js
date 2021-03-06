import axios from 'axios';
import { API_URL } from '../configs/index.config';
import { INTERNAL_ERROR, PAGE_NOT_FOUND } from '../configs/API_CODES';

export const handle500Error = () => {
    console.log(500);
    // window.location.href = `${process.env.PUBLIC_URL}/500`;
};

export const handle404Error = () => {
    console.log(404);
    // window.location.href = `${process.env.PUBLIC_URL}/404`;
};

export const baseRequest = () => {
    return axios.create({ baseURL: API_URL });
};

export const request = (responseType = 'json') => {
    const instance = axios.create({
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json',
        },
        responseType,
    });
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response) {
                if (error.response.status === PAGE_NOT_FOUND) {
                    handle404Error();

                    return Promise.reject(error);
                }
                if (error.response.status === INTERNAL_ERROR) {
                    handle500Error();

                    return Promise.reject(error);
                }
            }

            return Promise.reject(error);
        },
    );

    return instance;
};