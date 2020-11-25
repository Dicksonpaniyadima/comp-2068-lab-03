const { documentation, index, show } = require('../controllers/people');

module.exports = router => {
  router.get('/', documentation);
  router.get('/documentation', documentation);
  router.get('/people/', index);
  router.get('/people/:id', show);


  return router;
};

