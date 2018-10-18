var express=require('express')
var app =express()
var path=require('path')
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({ extended:false })

app.get('/',function(req,res){
  console.log("Entering into the login page..");
  res.sendFile(path.join(__dirname+'/index.html'))
})
app.post('/login_process',urlencodedParser,function (req, res) {

   console.log(res);
   //res.send(JSON.stringify(res));
   if(req.body.mail=="demo@demo.com" && req.body.password=="12345678"){
     res.send("log in sucessfully done..");
   }
   else {
     res.send("Invalid entry..");
   }
})
const server=app.listen("8000","localhost",function(){
	console.log("Server running...")
})
