"use strict";
require('dotenv').load();

const pmongo = require('promised-mongo');

var db;

if(process.env.DBUSER && process.env.DBPASS){
    db = pmongo('mongodb://' + process.env.DBUSER + ':' + process.env.DBPASS + '@' + process.env.DBHOST + ':' + process.env.DBPORT + '/' + process.env.DBNAME, ['tasks', 'data']);
} else {
    db = pmongo('mongodb://' + process.env.DBHOST + ':' + process.env.DBPORT + '/super-public', ['tasks', 'data']);
}


exports.add = function add(spData){
    return db.data.insert(spData);
};

