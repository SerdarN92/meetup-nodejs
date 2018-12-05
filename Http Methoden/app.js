var express = require('express');
var app = express();

app.get('/meetup', function (req, res) {
    res.send('Get-Request');
});

app.post('/meetup', function (req, res) {
    res.send('Post-Request');
});

app.listen(6001, function () {
    console.log('Server listening on port 6001');
});