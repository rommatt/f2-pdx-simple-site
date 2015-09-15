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
    ],
    labs: [
    {topic: "lab1begtrack"},
    {topic: "F2JSPDXLab2"}
    ]
  };

app.use(express.static(__dirname + "/app/"));

app.get("/course", function (req, res){
 var randomIndex = Math.floor(Math.random()*course.lectures.length);
 res.send(course.lectures[randomIndex].topic);
});

app.get("/labs", function (req, res){
 var randomLabIndex = Math.floor(Math.random()*course.labs.length);
 res.send(course.labs[randomLabIndex].topic);
});

// app.get("/", function(req, res) {
//   res.send(course.level);
// });

app.get("/", function(req, res) {
  res.sendFile("hello.html");
});





app.listen(port, function(){
  console.log('server started on port ' + port);
});
