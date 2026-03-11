import exp from 'express';
import {connect} from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import {userRoute} from './APIs/UserAPI.js';

//Load environment variables
dotenv.config();


//Create HTTP server
const app=exp();
const port=process.env.PORT || 4000;

//Add body parser middleware
app.use(exp.json());

app.use(cors({
    origin:['*']         //complete this 
}))

//Forward req to UserAPI if path starts with /user-api
app.use('/user-api',userRoute);


//Connect to DB
async function connectDB(){
 try{
  await connect(process.env.DB_URL);
  console.log('DB Connection success');

  //start server after DB connection
  app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
  });

 }
 catch(err){
  console.log('Err in DB connection:',err);
 }
}

connectDB();

//Add error handling middleware
app.use((err,req,res,next)=>{
 console.log('Error:',err);

 //Mongoose validation error
 if(err.name==='ValidationError'){
  return res.status(400).json({
   message:'Validation failed',
   errors:err.errors
  });
 }

 //Invalid ObjectId
 if(err.name==='CastError'){
  return res.status(400).json({
   message:'Invalid ID format'
  });
 }

 //Duplicate key
 if(err.code===11000){
  return res.status(409).json({
   message:'Duplicate field value'
  });
 }

 res.status(500).json({
  message:'Internal Server Error'
 });
});

export default app;