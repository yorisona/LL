const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./router/user.js');
const cors=require("cors")

//创建web服务器
var server=express();
server.listen(3000,()=>{
  console.log("社区已启动...")
});
//跨域
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}))

//托管静态资源到public目录下
server.use(express.static('public'));
//使用body-parser中间件将post请求数据解析为对象
//注意：一定要写在路由的前边
server.use(bodyParser.urlencoded({
  extended:false
}));
//把用户路由器挂载到/user
server.use('/user',userRouter)


