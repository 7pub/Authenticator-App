var express = require('express');
var app = express();

var path = __dirname + '/';
var port = 5003;

app.use(express.static(path));
app.get('*', function(req, res) {
    res.sendFile(path + '../index.html');
});
app.listen(port);
require('child_process').exec('start http://localhost:5003/');