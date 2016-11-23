var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';


router.get('/', function(req, res) {
  console.log('message on REC: ', req.message);
  // get info from DB
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }
    client.query('SELECT warehouse, fulfillment_days FROM warehouse', function(err, result) {
      done(); // close the connection.
      if(err) {
        console.log('select query error: ', err);
        res.sendStatus(500);
      }
      res.send(result.rows);
    });
  });
});



module.exports = router;
