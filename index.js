// importing our express package

import express from "express";

//import the dotenv package

import dotenv from "dotenv";
//importing the mongoose packages
import mongoose from "mongoose";
//configuring the env
dotenv.config();

//creating an instance of the express package
const app =express();

//choosing a port to start our server
const Port =5000;



//listen to an incoming resqust from the server
app.get("/",(request,response)=>{
    response.send("Backend Developers")

});
//
mongoose.connect(process.env.MONGO_DB_CONSTRING, (error)=>{
if(error){
    return console.log("Failed to connect MongoDB");
}
//else logout the connection
else{
    console.log("database connnection Successful");
}
});


app.listen(Port,()=>
console.log(`The server is ready and running:${Port}`)
);


