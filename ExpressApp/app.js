/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var path = require("path");
var morgan = require("morgan");
var app = express();
app.use(morgan("short"));
var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));
/*
app.use(function(req,res,next){
    console.log("Resqueest IP: " +req.url);
    console.log("Request Date" + new Date());
    next();
})
app.use(function(req,res,next){
    var filePath = path.join(__dirname, "static",req.url);
    fs.exists(filePath, function(exists){
        if(exists){
            //res.end('hello');
            res.sendFile(filePath);
        }
        else{
            next();
        }
    })
});
*/
app.use(function (req, res) {
    res.status(404);
    res.send("file Not Found...");
});
app.listen(3000, function () {
    console.log("App Startd at Port 3000...");
});
