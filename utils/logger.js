'use strict';

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;
const logger = (filename) => createLogger({
    level: 'debug',
    format: combine(
        label({ label: filename }),
        timestamp(),
        colorize(),
        printf(
            ({ level, message, label, timestamp }) => `${timestamp} [${label}] ${level}: ${message}`
        )
    ),
    transports: [new transports.Console()]
});

module.exports = logger;
