'use strict';

const logger = require('../utils/logger');

class DummyController {

    constructor(request, response) {

        this.request = request;
        this.response = response;
    }

    get() {

        logger.info("You're awesome!");
        this.response.send("Nice!");
    }
}

module.exports = DummyController;
