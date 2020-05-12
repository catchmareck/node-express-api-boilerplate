'use strict';

const Is = require('../../utils/validator');

module.exports = {
    read: {
        params: {
            id: Is().required().string()
        }
    }
}
