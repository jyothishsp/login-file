var express=require('express')
var app =express
app.get('',function(req,res){
  console.console.log("Enterin into the login page..");
  res.sendFile(path.join(__dirname+'/index.html'))
})
const server=app.listen("8000","localhost",function(){
	console.log("Server running...")
})
