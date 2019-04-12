# -Express-CROS-
基于Express的简单CROS跨域实现，读取不同域json数据
    1. 建立两个express项目（client、server）
    2.一个设置端口3000，一个设置端口3001
    3.同时开启两个npm

```
//clinet(index.html) 端口号为3001

<button id="btn">点击发送跨域请求</button>
<script>
      var btn = document.getElementById('btn');
      btn.onclick = function(){
        Ajax().get("http://localhost:3000/json1",function(meg){
            console.log(meg);
        })
      }
</script>

//Server 先部署CROS头文件，后设置路由
//部署头文件 设置跨域访问
var express = require('express');
var router = express.Router();

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//设置路由
router.get('/json1',function(req,res){
  var info = {
    name:"黑大帅",
    age:18,
    sex:"nan"
  }
  res.json(info);
})

```
