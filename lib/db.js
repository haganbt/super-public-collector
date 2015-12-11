"use strict";
require('dotenv').load();

const pmongo = require('promised-mongo');
const db = pmongo('mongodb://' + process.env.DBHOST + ':' + process.env.DBPORT + '/super-public', ['tasks', 'data']);

exports.add = function add(spData){
    return db.data.insert(spData);
};
