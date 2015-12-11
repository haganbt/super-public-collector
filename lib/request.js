var promiseProcess = require('promise-process');
var rp = require('request-promise');

require('dotenv').load();

const options = {
    method: 'POST',
    uri: 'https://api.datasift.com/v1.2/pylon/sample',
    body: {
        "hash": process.env.HASH,
        "count": 10
    },
    headers: {
        "Authorization": process.env.AUTHORIZATION,
        'content-Type': 'application/json'
    },
    json: true // Automatically stringifies the body to JSON
};

/**
 *
 * @returns {*} promise
 */
exports.get = function get(){
    return rp(options);
}
