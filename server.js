var express = require('express');
var _ = require('underscore');
var bodyParser = require('body-parser');
var multer = require('multer');
var jade = require('jade');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'jade');

// View
app.get('/', function(req, res) {
    res.status(200).render('index');
});

// Api code
var prefixes = ['Total', 'Awesome', 'Weird', 'Interesting', 'Sleepy'],
    suffixes = ['Fish', 'Cheese', 'Monster', 'Man', 'Crab'];

// Get functions
app.get('/api', function (req, res) {
    var text = _.sample(prefixes) + ' ' + _.sample(suffixes);
    res.status(200).send(text);
});
app.get('/api/prefixes', function (req, res) {
    res.status(200).send(prefixes);
});
app.get('/api/suffixes', function (req, res) {
    res.status(200).send(suffixes);
});
app.get('/api/prefixes/:index', function (req, res) {
    var index = parseInt(req.params.index, 10);
    if (index > prefixes.length - 1) res.status(404).send();
    res.status(200).send(prefixes[index]);
});

// Post functions
app.post('/api/suffixes', function (req, res) {
    var suffix = req.body.suffix;
    if (suffix && suffixes.indexOf(suffix) === -1) suffixes.push(suffix);
    res.status(200).send(suffixes);
});

// Server function
var server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log('http://%s:%s', host, port);
});

