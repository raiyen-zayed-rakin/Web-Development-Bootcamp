const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>")
});

app.get("/contact", function(req, res){
    res.send("Contact me at rakin@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Information");
});

app.listen(3000, function(){
    console.log("yep");
}); 