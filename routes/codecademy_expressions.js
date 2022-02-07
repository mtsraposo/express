const express = require('express');
const expressionsRouter = express.Router();

const seedElements = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
expressionsRouter.get('', (req, res, next) => {
    res.send(expressions);
});

module.exports = expressionsRouter;