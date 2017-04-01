
var express = require('express');
var app = express();
app.use('/JavaScript', express.static(__dirname + '/app/javascript'));
app.use('/films', express.static(__dirname + '/app/javascript/films'));
app.use('/lib', express.static(__dirname + '/app/lib'));
app.use('/template', express.static(__dirname + '/app/template'));
app.use('/image', express.static(__dirname + '/app/image'));
app.use('/css', express.static(__dirname + '/app/css'));

app.get('/', function (req, res) {
res.sendfile(__dirname + '/app/index.html');
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.bodyParser());


app.listen(8080); 

