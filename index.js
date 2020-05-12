'use strict';

require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { port } = require('./config');
const logger = require('./utils/logger');

const routes = require('./routes');

const app = express();

const whitelist = ['http://localhost:3000'];
app.use(cors({
    origin(origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error(origin + ' not allowed by CORS'))
        }
    },
    credentials: true
}));
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
    logger.info(`Listening on port ${port}...`);
});
