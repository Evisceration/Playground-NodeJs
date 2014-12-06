var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.send("Nothing to see here!");
});

module.exports = router;
