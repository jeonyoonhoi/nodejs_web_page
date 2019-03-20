var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.end('<h1> test</h1>');
});

module.exports = router;
