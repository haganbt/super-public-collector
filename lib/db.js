"use strict";
require('dotenv').load();

const pmongo = require('promised-mongo');

var db;

if(process.env.MONGOLAB_URI){
    console.log("Using MONGOLAB_URI: " + process.env.MONGOLAB_URI);
    db = pmongo(process.env.MONGOLAB_URI, ['tasks', 'data']);
} else {
    db = pmongo('mongodb://' + process.env.DBHOST + ':' + process.env.DBPORT + '/super-public', ['tasks', 'data']);
}


exports.add = function add(spData){
    return db.data.insert(spData);
};

