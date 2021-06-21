//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");


const app=express();

app.use(bodyParser.urlencoded({extended : true}));


app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){
console.log(req.body);

  var num1=Number(req.body.n1);
  var num2=Number(req.body.n2);

  var result=num1+num2;

   res.send("the result of the calculation is " + result);

});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){

  var w=Number(req.body.w1);
  var h=Number(req.body.h1);

  var bmi=(w/(h*h));

  res.send("your bmi is "+bmi);
});



app.listen(3000,function(){
  console.log("started port 3000");
});
