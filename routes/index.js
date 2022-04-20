var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First App' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Home' });
});

//renser('ejs파일이름')->view안에 있는 동일한 이름의 ejs파일을 가져온다
//나중에 vue파일은 public안에 넣어주고 사용함
router.post('/user', function(req, res, next) {
  const name = req.body.name;
  res.render('user', { title: 'Home', user : name });
});

module.exports = router;
