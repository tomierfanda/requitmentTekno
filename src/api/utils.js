import axios from 'axios'

const API_URL = 'http://localhost:3000/api/';

export function getApiNoAuth() {
    return axios.create({
        baseURL: API_URL,
        timeout: 100000,
        withCredentials: true,
        header: {
            'Access-Control-Allow-Origin' : '*',
            'Content-type' : 'application/json'
        }
    })
}

export function getApi (token, params) {
    if (params) {params.acces_token = token } else {
        params = {
            acces_token:token
        }
    }
    return axios.create({
        baseURL:API_URL,
        timeout:100000,
        withCredentials: true,
        params: params,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type' : 'application/json; charset=utf-8'
        }
    })
}