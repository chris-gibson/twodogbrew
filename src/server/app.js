var express = require("express");
var app = express();
app.use(express.logger());

var publicDir = path.join(path.dirname(__dirname), '/public/');

app.use(express.static(publicDir));

//app.get('/', function(request, response) {
//  response.send('Testing');
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});