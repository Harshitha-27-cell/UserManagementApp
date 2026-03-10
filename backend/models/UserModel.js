import {Schema,model} from 'mongoose';

//Create user Schema with validations
const userSchema=new Schema({
 username:{
  type:String,
  required:[true,"Name is required"]
 },
 email:{
  type:String,
  required:[true,"Email is required"],
  unique:[true,"Email already exists"]
 },
 dateOfBirth:{
 type:Date,
  required:[true,"DOB is required"]
 },
 mobileNumber:{
  type:Number
 },
 //for soft delete 
 status:{
    type:Boolean,
    default:true
 }

},{
 timestamps:true,
 versionKey:false,
 strict:"throw"
});

//Create User Model for User Schema
export const UserModel=model('user',userSchema);