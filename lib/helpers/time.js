"use strict";
const moment = require('moment');

exports.unixToHuman = function(unixTs){
    return new moment.unix(unixTs).utc().format('YYYY-MM-DD HH:mm:ss');
};

exports.ts = function(){
    return moment().utc().format("YYYY-MM-DD HH:mm:ss");
};
