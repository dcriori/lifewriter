var Evernote = require('evernote').Evernote;
var config = require('../config.json');
var callbackUrl = "http://localhost:3000/oauth_callback";
var wechat = require('node-wechat')('dcriori');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	wechat.handler(req, res);

	//监听文本信息
	wechat.text(function (data) {
	//console.log(data.ToUserName);
	//console.log(data.FromUserName);
	//console.log(data.CreateTime);
	//console.log(data.MsgType);
	//...
	var msg = {
	  FromUserName : data.ToUserName,
	  ToUserName : data.FromUserName,
	  //MsgType : "text",
	  Content : "这是文本回复",
	  //FuncFlag : 0
	}
	//回复信息
	wechat.send(msg);
	});

	res.redirect('index');
});

module.exports = router;
