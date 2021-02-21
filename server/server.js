const express=require("express");
var cors = require('cors');

 const app = express();
app.use(cors());
app.use(
    express.urlencoded({
      extended: true
    })
  )
  
  app.use(express.json())
  
app.post("/",(req,res)=>{
    console.log(req.body);
});


app.listen(3000,()=>{
    console.log("Server started on port 3000");
});