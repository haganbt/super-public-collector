"use strict";

var loadConfig = require('dynamic-config');

loadConfig.options.defaultEnv = "develop";

module.exports = loadConfig(__dirname, "config.js");