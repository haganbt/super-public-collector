"use strict";
const CronJob = require('cron').CronJob;

const request = require('./request');
const db = require('./db');
const time = require('./helpers/time');


var job = new CronJob('* 30 * * * *', function() {

        request
            .get()
            .then(function (spData) {
                console.log(time.ts() + " - DEBUG: Successfully collected data at: " + time.unixToHuman(spData.reset_at));
                console.log(time.ts() + " - DEBUG: Remaining data: " + spData.remaining);
                return db.add(spData.interactions);
            })
            .catch(function (err) {
                console.log(time.ts() + " - ERROR: ");
                console.log(err.error ? err.error : err);
                if(err.error.reset_at){
                    console.log("reset_at: " + time.unixToHuman(err.error.reset_at));
                }
                return;
            });

    }, function () {
        /* This function is executed when the job stops */
    },
    true /* Start the job right now */
);
