var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const active = { tab1: '', tab2: '', tab3: 'active-link', tab4: '' };
  res.render('blog', { title: 'Articles', active });
});


router.get('/projects', (req, res) => {
  const active = { tab1: '', tab2: 'active-link', tab3: '', tab4: '' };
  res.render('projects', { title: 'Projects', active });
});

module.exports = router;
