var express = require('express'); 

// Create our app
var app = express();
const PORT = process.env.PORT || 3002;

// app.use(express.static('public'));
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up at port ' + PORT);
});



// var express = require('express');
//
// var app = express();
// const PORT = process.env.PORT || 3000;
//
// app.use(function (req, res, next){
//   if (req.headers['x-forwarded-proto'] === 'http') {
//     next();
//   } else {
//     res.redirect('http://' + req.hostname + req.url);
//   }
// });
//
// app.use(express.static('public'));
//
// app.listen(PORT, function () {
//   console.log('Express server is up on port ' + PORT);
// });
