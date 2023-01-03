//jshint esversion:6
const express = require("express");
const app = express();
app.get("/", function(request, response){
  //console.log(request);
  response.send("<h1>Hello!</h1>");
});
app.get("/contact", function(req, res){
  res.send("Contact me at: MAR.musicismypasion@yahoo.com");
});
app.get("/about", function(req, res){
  res.send("My name is Andreea and I like IT and music.");
});
app.get("/hobbies", function(req, res){
  res.send("<ul><li>Music</li><li>IT</li></ul>");
});
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
