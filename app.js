// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')
var fs = require("fs")
var app = express()
//포트 설정
app.listen("8080", function (){
  console.log("server start")
})

app.use(express.static(__dirname + '/public'))

app.get("/", function (req,res) {
  fs.readFile('index.html', function (error,data) {
    if (error) {
      console.log(error);
    } else {
      
      res.end(data)
    }
  })
})

app.get("/notice", function (req,res) {
  fs.readFile('notice.html', function (error,data) {
    if (error) {
      console.log(error);
    } else {
      
      res.end(data)
    }
  })
})





//-------------------------------------------




