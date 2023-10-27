var express = require('express');
var app = express();
var fs = require("fs");

var song = {
    "song6" : {
       "song" : "Hurricane",
       "artist" : "Kanye West",
       "genre" : "hip-hop, soul",
       "link" : "https://www.youtube.com/watch?v=VRJiK-kdDb4",
       "id": 6
    }
 }
 
 app.post('/addSong', function (req, res) {
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["song4"] = song["song4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

app.get('/listSongs', function (req, res) {
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      var songs = JSON.parse( data );
      var song = songs["song" + req.params.id] 
      console.log( song );
      res.end( JSON.stringify(song));
   });
})

app.delete('/deleteSong', function (req, res) {
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["song" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})