var express = require('express');
var app = express();
var path = require('path');
var warehouse = require('./routes/warehouse');


// serve static files
app.use(express.static(path.resolve('./server/public')));

app.use('/warehouse', warehouse)

// server index file
app.get('/home', function(req, res) {
    res.send("hello from the server");
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.listen(3000, function() {
  console.log("server running, check localhost:3000");
});
