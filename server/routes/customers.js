var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';

<<<<<<< HEAD
router.get('/', function(req, res) {
  console.log('get request');

  pg.connect(connectionString, function(err, client, done) {
    if(err) {
        console.log('connection error: ', err);
        res.sendStatus(500);
    }

    client.query('SELECT first_name, last_name FROM customers', function(err, result) {
      done();

      if(err) {
        console.log('select query error: ', err);
        res.sendStatus(500);
      }
        res.send(result.rows);
    });
  });
});

router.post('/', function(req, res) {
  var newCustomer = req.body;
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query(
      'INSERT INTO customers (first_name, last_name)' +
      'VALUES ($1, $2)',
      [newCustomer.first_name, newCustomer.last_name],
      function(err, result) {
        done();

        if(err) {
          console.log('insert query error: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  });
});
=======
console.log("customers linked");
>>>>>>> master

module.exports = router;
