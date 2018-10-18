var express=require('express')
var app =express()
var path=require('path')

app.get('/',function(req,res){
  console.log("Entering into the login page..");
  res.sendFile(path.join(__dirname+'/index.html'))
})
app.get('/login_process', function (req, res) {
   response = {
      mail:req.query.mail,
      password:req.query.password
   }
   console.log(res);
   //res.send(JSON.stringify(res));
   if(req.query.mail=="demo@demo.com" && req.query.password=="12345678"){
     res.send("log in sucessfully done..");
   }
   else {
     res.send("Invalid entry..");
   }
})
const server=app.listen("8000","localhost",function(){
	console.log("Server running...")
})
