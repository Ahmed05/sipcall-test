 var express = require('express');
 var app = express();
//Middleware
//app.listen(3000)
//    var app = express.createServer();
    app.get('/', function(req, res){
        res.send('Hello World');
    });
    
 app.use(express.static(__dirname + '/static'));
   

    app.listen(8000);