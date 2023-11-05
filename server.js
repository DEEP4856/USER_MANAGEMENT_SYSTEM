const express = require('express');
//dotenv module is very useful as it allows you to keep secret from source code . it is very helpful when we work with a collaborating environment when you want to share your code with other people . you can share instead of sharing credentials .
const dotenv = require('dotenv');
//morgan module allows us to log a request on the console whenever we make request
const morgan = require("morgan");
const bodyparser = require ('body-parser');
const path = require("path");
const connectDB = require('./server/database/connection');
// const controller = require('./server/controller/controller')


const app = express();

dotenv.config({path:'config.env'})
const PORT=process.env.PORT ||3000

//log requests -- also shows get status and speed 
app.use(morgan('tiny'))


//mongodb connection
connectDB(); 

//to ignore cors error
app.use(cors())

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}));

 


//set view engine
app.set("view engine","ejs")
// app.set("views".path.resolve(__dirname,"view/ejs"))



//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))







//load routers
app.use('/',require('./server/routes/router'))






 



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})  
