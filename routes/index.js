'use strict';

const router = require('express').Router({ mergeParams: true });

router.use('/', require('./dummy'));

module.exports = router;
