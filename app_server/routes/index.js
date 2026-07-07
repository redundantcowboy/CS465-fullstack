var express = require('express');
var router = express.Router();

/* Added this to connect the main controller to this route */
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
