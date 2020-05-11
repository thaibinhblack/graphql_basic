const axios = require('axios')
const domain = 'http://127.0.0.1:8000/'
const http = axios.create({
    baseURL: domain
})
module.exports =  http;
