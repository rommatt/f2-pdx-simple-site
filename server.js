var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var course = {
    level:"201",
    name:"Foundations II",
    lectures: [
    {topic: "Javascript Basics"},
    {topic: "Terminal"},
    {topic: "Javascript Not So Basics"},
    {topic: "Objects and OOP"},
    {topic: "The Browser"},
    {topic: "Servers in Node.js"}
    ]
  };

app.get("/course", function (req, res){
 var randomIndex = Math.floor(Math.random()*course.lectures.length);
 res.send(course.lectures[randomIndex].topic);
});

app.get("/", function(req, res) {
  res.send(course.level);
});









app.listen(port, function(){
  console.log('server started on port ' + port);
});
