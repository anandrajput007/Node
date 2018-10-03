var http = require('http');
var fs = require('fs');

function handleIncomingRequest(req, res){    
    console.log("Incoming request: ("+ req.method + ") "+ req.url);
    loadDirectory(function(err, directory){
        if(err != null){
            res.writeHead(503, {'Content-Type':'application/json'});
            res.end(JSON.stringify({error:"file_error",message:err.message})+"\n");
            return;
        }
        res.writeHead(503, {'Content-Type':'application/json'});
        res.end(JSON.stringify({error:null,data:{directory:directory}})+"\n");
    });
}

function loadDirectory(callback){
    fs.readdir('./Gallary',function(err, dirList){
        callback(err,dirList);
    });
}

var server =  http.createServer(handleIncomingRequest);
server.listen(8080);