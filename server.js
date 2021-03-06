// server.js

'use strict'

// import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Item = require('./model/items');

var app = express();
var router = express.Router();

var port = 3001;

//db config
var mongoDB = 'mongodb://accessuser:fabricmotivation@ds213759.mlab.com:13759/shoppingitems';
mongoose.connect(mongoDB)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

// Route for shopping items
router.route('/items')
  // get all items from DB
  .get(function(req, res) {
    Item.find(function(err, items){
      if (err)
      res.send(err);
      res.json(items)
    });
  })
  .post(function(req, res){
    var item = new Item();
    item.name = req.body.name;
    item.price = req.body.price;

    item.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Added succesfully!'});
    });
  });


app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log('api running on port ${port}');
});
