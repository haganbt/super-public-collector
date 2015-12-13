"use strict";
require('dotenv').load();

const MongoClient = require('mongodb').MongoClient;

/**
 *
 * @returns {Promise}
 */
const getConnection = function getConnection(){
    let url = process.env.MONGOLAB_URI ?  process.env.MONGOLAB_URI
        : 'mongodb://' + process.env.DBHOST + ':' + process.env.DBPORT + '/super-public';
    return MongoClient.connect(url);
};

/**
 *
 * @param {data}, "collection"
 * @returns {Promise}
 */
exports.addData = function addData(data, collection){
    collection = collection || 'data';
    getConnection()
        .then(db => {
            return db.collection(collection).insert(data);
        });
};
