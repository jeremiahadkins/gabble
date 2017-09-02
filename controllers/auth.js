let AuthController = {
  signup: function(req, res) {
    res.render('signup');
    console.log('do wut');
  },
  login: function(req, res) {
    res.render('login');
  }
};

module.exports = AuthController;
