const express = require('express');
//Consuming Data.js file
const data = require('./data');
const app = new express();

var port = process.env.PORT || 4040;
app.get('/',function(req, res){
    res.send('Get all Job from /jobs URL');
});

app.get('/jobs',function(req, res){
    return res.json(data.jobs);
});

app.listen(port, (req, res) => {
    console.log(`Server running on Port: `+port);
});