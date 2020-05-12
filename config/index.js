'use strict';

const {
    NODE_ENV: env,
    PORT: port,
    LOG_LEVEL: logLevel
} = process.env;

module.exports = {
    env,
    port,
    logLevel
};
