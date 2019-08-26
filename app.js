const express = require('express');
const path = require('path');
const expressLayout = require('express-layout');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
var routes = require('./routes/index');
var users = require('./routes/users');

app.use(expressLayout());

app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use('/users', users);
app.use('/', routes);

// listen on port 3000
app.listen(port, function () {
console.log('Express app listening on port 3000');
});
