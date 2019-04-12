var express = require('express');
var router = express.Router();

//设置跨域访问
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  res.end({ "title": "Express","age":12 });
});

router.get('/json1',function(req,res){
  var info = {
    name:"黑大帅",
    age:18,
    sex:"nan"
  }
  res.json(info);
})

module.exports = router;
