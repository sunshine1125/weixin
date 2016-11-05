var express = require("express");
var bodyparser = require("body-parser");
var app = new express();

//处理 post 请求，将 post 请求的数据封装为 json 
app.use(bodyparser.urlencoded({
	extended:true
}));
//加载token 模块
require("./token.js")(app);
require("./jssdk.js")(app);

var path = require("path");
var staticpath = path.join(__dirname+"/../static");
app.use(express.static(staticpath));

app.listen(80,function(){
	console.log("open http://127.0.0.1:80");
})