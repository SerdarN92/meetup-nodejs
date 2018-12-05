var router = require('express').Router();

router.use('/meetups', require('./meetups'));

module.exports = router;