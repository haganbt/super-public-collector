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
 * @param {spData}
 * @returns {Promise}
 */
exports.add = function add(spData){
    let t = getConnection()
            .then(function(db){
        return db.collection('data').insert(spData);
    });
};
