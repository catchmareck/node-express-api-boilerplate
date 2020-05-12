'use strict';

const router = require('express').Router({ mergeParams: true });

const { DummyController } = require('../controllers');
const DummySchema = require('./validate/dummy-schema');

const validate = require('../middleware/validate');

router.get('/:id', validate(DummySchema.read), (request, response) => {

    const controller = new DummyController(request, response);
    controller.get();
});

module.exports = router;
