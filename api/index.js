const express = require('express');
const router = express.Router();

// For the foos
const fooRouter = require('./foos.api')

router.use('/foos', fooRouter)

// For the jobs 
const jobsRouter = require('./jobs.api')
router.use('/jobs', jobsRouter)


module.exports = router;
