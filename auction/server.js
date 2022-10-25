var express = require('express');
var app = express();
var fs = require("fs");

app.get('/products', function (req, res) {
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(" listening on ", host, port)
})