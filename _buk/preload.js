// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
var express = require('express');
var app = express();

var path = __dirname + '/';
var port = 5003;

app.use(express.static(path));
app.get('*', function(req, res) {
    req.path = __dirname + './main.js';
    res.sendFile(path + './index.html');
    //console.log(req);
});
app.listen(port);
require('child_process').exec('start http://localhost:5003/');