// importing our express package

import express from "express";

//import the dotenv package

import dotenv from "dotenv";
//importing the mongoose packages
import mongoose from "mongoose";
//configuring the env
dotenv.config();
//importing the todo from our model package
import { Todo } from "./models/todo.js";

//creating an instance of the express package
const app =express();

//decoding the body using the express.json middleware
app.use(express.json());

//choosing a port to start our server
const PORT = process.env.PORT?? 5000;

//listen to an incoming resqust from the server
app.get("/",(request,response)=>{
    response.send("Backend Developers")

});
//posting to our database using asyncronous function
app.post('/todo',async(req, res)=>{
   const {title,description, dateTime,isccomplete}=req.body;

   const newtodo=Todo({
    title:title,
    description:description,
     dateTime:dateTime,
     isComplete:isComplete
});
//saves the todo model and awaits the results
const result= await newtodo.save();
req.json(result); 

});

//
mongoose.connect(process.env.MONGO_DB_CONSTRING, (error)=>{
if(error){
    return console.log("Failed to connect MongoDB");
}
//else logout the connection
else{
    console.log("database connnection Successful");

    app.listen(PORT,()=>
    console.log(`The server is ready and running:${PORT}`)
    );
}
});



