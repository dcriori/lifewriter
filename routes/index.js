var Evernote = require('evernote').Evernote;
var config = require('../config.json');
var callbackUrl = "http://localhost:3000/oauth_callback";
// var wechat = require('wechat');
var config = {
  token: 'dcriori',
  appid: 'wxce68d383858d6357',
  encodingAESKey: 'G0YA9cPB6bxZrlYdpy9Ol8F7crRQTo1avymZn2Lsz1m'
};


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	res.redirect('index');
});

module.exports = router;
