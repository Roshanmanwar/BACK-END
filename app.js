const express = require("express");
const BasicRouter = require("./routes/Basic.routes");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3002;


//allow to access body data
app.use(bodyParser.json());

//to enable Post Method data
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//use BasicRouter 
app.use('/',BasicRouter)





//server listen
app.listen(PORT,()=>{
    console.log('Server is started on Port no. :',PORT);
})
