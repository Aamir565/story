const { Console } = require('console');
const express = require('express');
const app = express();


app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(1010,function(){
    console.log('server is running on port 1010');
});