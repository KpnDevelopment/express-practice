var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const names=["vishnu","arun","adharsh"]

  const person={name:'vishnu' ,comments:{comment:'hi coding ',date:'20-20-20'}}
  res.render('aboutus',{person});
});

module.exports = router;