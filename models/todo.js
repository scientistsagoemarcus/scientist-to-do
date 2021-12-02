//importing the mongoose package
import mongoose from "mongoose";

//getting the files from our package
const{Schema, model}=mongoose;

//creating a Class Schema and passing paramenters to it.
const todoSchema=Schema({
    title:String,
    description:String,
    dateTime:String,
    isCompleted:Boolean

});
export const Todo=model('todo', todoSchema);