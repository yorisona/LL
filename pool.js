const mysql=require('mysql')
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'',
	user:'root',
	password:'',
	database:'ll',
	connection:40
})
module.exports=pool