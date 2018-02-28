require('dotenv').config();
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var sequelize = require('./db');


sequelize.sync() // sync( {force: true}), to drop then create each time the app starts!

app.use(bodyParser.json());

app.use(require('./middleware/header'));
app.use(require('./middleware/validate-session'));



app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));
app.use('/api/log', require('./routes/log'));
app.use('/api/contact', require('./routes/contact'));



// app.use('/api/contact', function(req, res) {
// 	res.send("Connected");
// })

// app.use('/api/test', function(req, res){
// 	res.send("You have connected ");
// });

http.listen(process.env.PORT, function() {
	console.log(`app is running on ${process.env.PORT}`);
});







