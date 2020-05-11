// add this import at the top
const fetch = require('node-fetch')
const axios = require('../axios')
const _ = require('lodash')
var URL = 'http://127.0.0.1:8000/'
module.exports = {
    fetchCustomers: () => 
    {   console.log('AXIOS',axios)
        return axios.get('api/customers').then((response) => {
            return response.data.result
        })
        .catch((err) => {
            // console.log(err)
            return []
        })
        
    }
}