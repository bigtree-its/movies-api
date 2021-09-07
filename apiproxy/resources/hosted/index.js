var http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
    // parse requests of content-type - application/json
app.use(bodyParser.json())


app.get('/action', (req, res) =>{
      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.json(
          [
              {Name:'The Suicide Squad',Director: 'James Gunn', Year: 2021 },
              {Name:'The Batman',Director: 'Matt Reeves', Year: 2020},
              {Name:'Tenet',Director: 'Christopher Nolan',Year: 2020},
              {Name:'Project Power',Director: 'Henry Joost',Year: 2020}
          ]);
    }
);
app.get('/comedy', (req, res) =>{
      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.json(
          [
              {Name:'The Sleepover',Director: 'Trish Sie', Year: 2020 },
              {Name:'The Legend of Korra',Director: ' Janet Varney', Year: 2012},
              {Name:'The Gentleman',Director: 'Guy Ritchie',Year: 2019},
              {Name:'Doom Patrol',Director: 'Diane Guerrero',Year: 2019}
          ]);
    }
);
app.get('/thriller', (req, res) =>{
      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.json(
          [
              {Name:'Bad Boys for Life',Director: 'Adil El Arbi', Year: 2020 },
              {Name:'Oceans Eight',Director: 'Matt Reeves', Year: 2018},
              {Name:'Red',Director: 'Robert Schwentke',Year: 2010},
              {Name:'Unknown Origins',Director: 'David Galán Galindo',Year: 2020}
          ]);
    }
);


console.log('node.js application starting...');
console.log(process.env);

// var svr = http.createServer(function(req, resp) {
//   console.log(req.method, req.url);
//   resp.setHeader("Content-Type", "application/json");
//   resp.end(JSON.stringify({ date: new Date(), msg: 'Hello, World!'}));
// });

app.listen(process.env.PORT || 3000, function() {
  console.log('Node HTTP server is listening');
});
