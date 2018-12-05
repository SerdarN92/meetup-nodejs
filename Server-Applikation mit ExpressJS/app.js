var express = require('express');
var app = express();
const port = 6001;

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(port, function () {
    console.log('Server listening on: http://localhost:' + port);
});