var express = require('express');
var app = express();
app.use(require('./routes'));

app.listen(6001, function () {
    console.log('Server listening on port 6001');
});