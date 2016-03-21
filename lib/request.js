var promiseProcess = require('promise-process');
var rp = require('request-promise');

require('dotenv').load();

const options = {
    method: 'POST',
    uri: 'https://api.datasift.com/v1.3/pylon/sample',
    body: {
        "id": process.env.ID,
        "count": 20
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
