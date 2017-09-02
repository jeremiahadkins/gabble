const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const port = process.env.PORT || 8080;

const app = express();
const models = require('./models');
const router = require('./router.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

app.engine('handlebars', handlebars({defaultLayout: 'app'}));

// setup body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
 app.use(session({
   secret: 'daboranch',
   resave: true,
   saveUninitialized:true
 })); // session secret

 app.use(passport.initialize());
 app.use(passport.session()); // persistent login sessions

// setup bootstrap static
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set('view engine', 'handlebars');

app.listen(port);



