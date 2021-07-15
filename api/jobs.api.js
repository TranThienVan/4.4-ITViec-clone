const express = require('express');
const router = express.Router();

let jobs = require('../data.json')

router.get('/', function(req, res, next) {
  res.json({jobs: jobs.jobs.slice(0, 20)})
});

module.exports = router;
