import exp from 'express';
import {UserModel} from '../models/UserModel.js';

//Create min-express app
export const userRoute=exp.Router();

//User API routes

//Create user
userRoute.post('/user',async(req,res,next)=>{
 try{
 //get new user
 const newUserData=req.body;

 //create user document
 const newUser=new UserModel(newUserData);

 //save new user
 const savedUser=await newUser.save();

 //send res 
 res.status(201).json({message:'User created',payload:savedUser});
 }
 catch(err){
  next(err);
 }
});

//Read all users
userRoute.get('/users',async(req,res,next)=>{
 try{
 //read all users
 let usersList=await UserModel.find({status:true});

 //send res
 res.status(200).json({message:'All users',payload:usersList});
 }
 catch(err){
  next(err);
 }
});

//Read a user by ID
userRoute.get('/users/:id',async(req,res,next)=>{
 try{
 //get user id from url
 let uid=req.params.id;

 //find user by id
 let user=await UserModel.findOne({_id:uid,status:true});

 if(!user){
  return res.status(404).json({message:'User not found'});
 }

 //send res
 res.status(200).json({message:'User found',payload:user});
 }
 catch(err){
  next(err);
 }
});

//Delete a user by ID
userRoute.delete('/users/:id',async(req,res,next)=>{
 try{
 //get user id
 let uid=req.params.id;

 //find user and change status to false
 let updatedUser=await UserModel.findByIdAndUpdate(
  uid,
  {$set:{status:false}},
  {new:true}
 );

 //check user 
 if(!updatedUser){
  return res.status(404).json({message:'User not found'});
 }

 //send res
 res.status(200).json({message:'User deleted'});
 }
 catch(err){
  next(err);
 }
});

//Activate User(change status to true)
// (used to make changes in resource):- Acc.g to Rest API rules,PUT(complete chane in resource) & PATCH(partial changes in ) 
userRoute.patch('/users/:id',async(req,res,next)=>{
 try{
 //get user from url
 let uid=req.params.id;

 //find user and change status to true
 let user=await UserModel.findByIdAndUpdate(
  uid,
  {$set:{status:true}},
  {new:true}
 );

 if(!user){
  return res.status(404).json({message:'User not found'});
 }

 //send res
 res.status(200).json({message:'User Activated',payload:user});
 }
 catch(err){
  next(err);
 }
});

//Update user by ID