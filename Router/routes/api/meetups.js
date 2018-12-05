var router = require('express').Router();

router.get('/heute', function (req, res) {
    return res.send('Einführung in NodeJS');
});

module.exports = router;