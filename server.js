var express = require('express');
var app = express();


app.use(express.static(__dirname+'/app'));
app.use(express.static(__dirname+'/app/images'));
app.use(express.static(__dirname+'/app/images/banderas'));

app.get('/',function(req,res){
    res.sendFile('index.html');
});

app.listen(8000);