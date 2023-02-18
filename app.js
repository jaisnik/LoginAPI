const dotenv= require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const app= express();

dotenv.config({path:'./config.env'});
require('./db/conn');
//command for making json input understand by express as express don't know jason
app.use(express.json());

app.use(require('./router/auth'));

const PORT= process.env.PORT;

const start = async() => {
    try{
        app.listen(PORT,()=>{
            console.log('Yes, listing initialted at',PORT);
        });
    }
    catch(error) {
    console.error(error);
}
};

start();