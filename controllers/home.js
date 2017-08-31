let HomeController = {
  home: function(req, res) {
    // get list of gabbles
    res.render('index');
  },
  create: function(req, res) {
    res.render('create');
  },
  createGabble: function(req, res) {
    // get req.body
    // save object to db
    console.log(req.body);
    // redirect to index route
    res.redirect('/');
  },
  detail: function(req, res) {
    let gabbleId = req.params.id;
    // fetch gabble instance from db based on id
    // using many to many, get likes associated with gabble instance
    // render detail showing likes

    res.render('detail', { gabbleId });
  }
};

module.exports = HomeController;
