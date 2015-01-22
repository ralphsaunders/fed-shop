var express = require('express'),
    _ = require('underscore'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var prefixes = ['Odd', 'Loud', 'Super'],
    suffixes = ['Sausage', 'Bacon', 'Lamb Chop'];

app.get('/api', function(req, res) {
    text = _.sample(prefixes) + ' ' + _.sample(suffixes);

    res.status(200).send(text);
});

app.get('/api/prefixes', function(req, res) {
    res.status(200).send(prefixes);
});

app.get('/api/suffixes', function(req, res) {
    res.status(200).send(suffixes);
});

app.get('/api/prefixes/:id', function(req, res) {
    var index = parseInt(req.params.id, 10);

    if(index <= prefixes.length - 1) {
        res.status(200).json(prefixes[index]);
    } else {
        res.status(404).send('404 not found')
    }
});

app.get('/api/suffixes/:id', function(req, res) {
    var index = parseInt(req.params.id, 10);

    if(index <= suffixes.length - 1) {
        res.status(200).json(suffixes[index]);
    } else {
        res.status(404).send('404 not found')
    }
});

app.post('/api/prefixes', function(req, res) {
    var prefix = req.body.prefix;

    if(prefix && prefixes.indexOf(prefix) === -1) {
        prefixes.push(prefix);
    }

    res.status(200).send(prefixes);
});

app.post('/api/suffixes', function(req, res) {
    var suffix = req.body.suffix;

    if(suffix && suffixes.indexOf(suffix) === -1) {
        suffixes.push(suffix);
    }

    res.status(200).send(suffixes);
});

var server = app.listen(3000, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log('App listening at http://%s:%s', host, port)
});


