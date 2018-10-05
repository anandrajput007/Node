const express = require('express');
const bodyParser =  require('body-parser');
//Consuming Data.js file
const data = require('./data');
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.PORT || 4040;
app.get('/', function (req, res) {
    res.send('Get all Job from /jobs URL');
});

//get all jobs
app.get('/jobs', function (req, res) {
    return res.json(data.jobs);
});

//add job into jobs
app.post('/jobs', function (req, res) {

    console.log(req.body);
    //model initilization
    var Id = req.body.Id;
    var Title = req.body.Title;
    var Description = req.body.Description;
    var Experiance = req.body.Experiance;
    var Location = req.body.Location;
    
    var job = {
        Id,
        Title,
        Description,
        Experiance,
        Location,
    };

    data.jobs.push(job);
    return res.json(data.jobs);
});


app.listen(port, (req, res) => {
    console.log(`Server running on Port: ` + port);
});