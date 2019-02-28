//引入上一级目录下的mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//2.登录路由
router.get('/login',(req,res)=>{
	var $uname=req.query.uname
	var $upwd=req.query.upwd
	if(!$uname){
		res.send({code:-1,data:"用户名不能为空"})
		return;
	}
	if(!$upwd){
		res.send({code:-1,data:"密码不能为空"})
		return;
	}
	//res.send("用户名："+$uname+"密码："+$upwd);
	var sql="select * from ll_user where uname=? and upwd=?"
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err)throw err
		if(result.length>0){
			res.send({code:1,data:result})
		}else{
			res.send({code:-2,data:"用户名密码错误"})
		}
	})
})
//2.验证用户名是否存在
router.get('/checkuname',(req,res)=>{
	$uname=req.query.uname
	if(!$uname){
		res.send('用户名不能为空')
		return;
	}
	pool.query("select * from ll_user where uname=?",[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('0') //已存在
		}else{
			res.send('1')
		}
	})
})

//3.注册
router.post('/register',(req,res)=>{
	$user_name=req.body.user_name
	var obj = req.body;
	console.log(obj);
	$uname=req.body.uname
	$upwd=req.body.upwd
	// $email=req.body.email
	// var obj=req.body
	// if(!$user_name){
	// 	res.send('昵称不能为空')
	// 	return
	// }
	// if(!$uname){
	// 	res.send('用户名不能为空')
	// 	return
	// }
	// if(!$upwd){
	// 	res.send('密码不能为空')
	// 	return
	// }
	// if(!$email){
	// 	res.send('邮箱不能为空')
	// 	return
	// }
	
	pool.query("insert into ll_user set ?",[obj],(err,result)=>{
		if(err) throw err
		if(result.affectedRows>0){
			res.send('注册成功')
		}
	});
})


//4.查询
router.get("/userlist",(req,res)=>{
	pool.query("select uid,uname,upwd,email,user_name from ll_user",(err,result)=>{
		if(err) throw err
		res.send(result)
	})
})
//5.根据id查询
router.get('/chaxun',(req,res)=>{
	var $uid=req.query.uid
	if(!$uid){
		res.send('编号不能为空')
		return
	}
	pool.query('select * from ll_user where uid=?',[$uid],(err,result)=>{
		if(err) throw err
		res.send(result[0])
	})
})
//6.修改
router.post('/xiugai',(req,res)=>{
	$user_name=req.body.user_name
	$uname=req.body.uname
	$upwd=req.body.upwd
	$email=req.body.email
	$uid=req.body.uid
	if(!$user_name){
		res.send('昵称不能为空')
		return
	}
	if(!$uname){
		res.send('用户名不能为空')
		return
	}
	if(!$upwd){
		res.send('密码不能为空')
		return
	}
	if(!$email){
		res.send('邮箱不能为空')
		return
	}
	pool.query('update ll_user set user_name=?,uname=?,upwd=?,email=? where uid=?',[$user_name,$uname,$upwd,$email,$uid],(err,result)=>{
		if(err)throw err
		if(result.affectedRows>0){
			res.send("<script>alert('修改成功');location.href='http://127.0.0.1:3000/user_select.html'</script>")
		}else{
			res.send('更改失败')
			return
		}
	})
})
//删除
router.get('/userdelete',(req,res)=>{
	$uid=req.query.uid
	if(!$uid){
		res.send('编号不能为空')
		return
	}
	pool.query('delete from ll_user where uid=?',[$uid],(err,result)=>{
		if(err)throw err
		if(result.affectedRows>0){
			res.send('1')
		}else{
			res.send('0')	
		}
	})
})

// 查询番剧信息
router.get('/fanjulist',(req,res)=>{
	var sql = 'select *from ll_index_video where video_id<=10';
	pool.query(sql,(err,result)=>{
	  if(err)throw err;
	  res.send(result);
	});
  });


//查询番剧周期表 周一
router.get('/zhouqi1',(req,res)=>{
	var sql="select * from ll_zhouqi where id<=7"
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})
// 周二
router.get('/zhouqi2',(req,res)=>{
	var sql="select * from ll_zhouqi where id>7 and id<=14"
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})
//周三
router.get('/zhouqi3',(req,res)=>{
	var sql="select * from ll_zhouqi where id>14 and id<=19"
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})
//周四
router.get('/zhouqi4',(req,res)=>{
	var sql="select * from ll_zhouqi where id>19 and id<=23"
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})
//周五
router.get('/zhouqi5',(req,res)=>{
	var sql="select * from ll_zhouqi where id>23 and id<=31"
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})
//周六
router.get('/zhouqi6',(req,res)=>{
	var sql="select * from ll_zhouqi where id>31 and id<=36"
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})
//周日
router.get('/zhouqi7',(req,res)=>{
	var sql="select * from ll_zhouqi where id>36 and id<=42"
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})


//动画排行榜
router.get("/donghua_list",(req,res)=>{
	var sql="select * from ll_video_list1 where sort='donghua'"
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})

router.get("/donghua_list2",(req,res)=>{
	var sql="select * from ll_video_list2 where sort='donghua'"
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})

//查询对应video
router.get('/videolist',(req,res)=>{
	var lid=req.query.lid
	var sql="select * from ll_video_list1 where lid=?"
	pool.query(sql,[lid],(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})
//导出路由器


module.exports=router;