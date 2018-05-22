var express = require('express');
var app = express(); // create our app w/ express
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var routes = require('./api/routes');


app.set('port', (process.env.PORT || 5000));

// log every request to the console
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));

// parse application/json
app.use(bodyParser.json());

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

//configure for cross origin headersa
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// Set-up Routing ======================================================================
var router = express.Router();

// Set our API routes
app.use('/api', routes);

// point static path to dist/public
app.use('/', express.static(path.join(__dirname, '/twitter/dist/twitter/')));

// Catch all other routes
router.get('*', (req, res) => {
  res.render(path.join(__dirname, '/public/dist/tweet-app/index.html'));
})

// Listen to port 5000 (start app with node server.js) ======================================

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});