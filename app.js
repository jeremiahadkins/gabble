const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const router = require('./router.js');

const app = express();

const models = require('./models');

app.engine('handlebars', handlebars({defaultLayout: 'app'}));
// setup body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// setup bootstrap static
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set('view engine', 'handlebars');

router(app);

// const migos = models.User.build({
//   username: 'migos',
//   display_name: 'Huncho',
//   password: 'password' 
// });

// migos.save().then(function (newUser) {
//   console.log(newUser);
// })

models.User.findOne().then(function (user) {
  console.log('dab o ranch', user);
});

app.listen(port);



