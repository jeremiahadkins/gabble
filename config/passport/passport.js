const bCrypt = require('bcrypt-nodejs');
const models = require('../../models');

module.exports = function(passport, user) {
  let User = user;
  let LocalStrategy = require('passport-local').Strategy;
  
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function(req, username, password, done) {
      
      let generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      models.User.findOne({
        where: {
          username: username
        }
      }).then(function(user) {
   
        if (user){
          return done(null, false, { message: 'That username is already taken'});
        } else {
          let userPassword = generateHash(password);
   
          let data = {
            username: username,
            password: userPassword
            // firstname: req.body.firstname,
            // lastname: req.body.lastname
          };

          User.create(data).then(function(newUser, created) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));
  //serialize
  // passport.serializeUser(function(user, done) {
  //   done(null, user.id);
  // });
  // deserialize user 
  // passport.deserializeUser(function(id, done) {
  //   User.findById(id).then(function(user) {
  //     if (user) {
  //       done(null, user.get());
  //     } else {
  //       done(user.errors, null);
  //     }
  //   });
  // });
};
