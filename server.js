const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();

// //cors
// var cors = require('cors');
// const morgan = require('morgan');

//importing files
const connectDb = require("./config/connectDB");
const userRoute = require('./routes/userRoute');
const transactionRoute = require('./routes/transactionRoutes');

//port
const port = 8080;

//config dotenv file
dotenv.config();

// database connect
connectDb();

//static files
app.use(express.static(join.path(__dirname, "./client/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
//middlewares
// app.use(cors());
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/v1/users',userRoute);
app.use('/api/v1/transaction',transactionRoute);

//listening server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});