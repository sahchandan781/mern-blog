import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

export const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    dotenv.config();

    if( !username ||
        !email ||
        !password ||
        username === '' ||
        email === '' || 
        password === ''){
        next(errorHandler(400, 'All field are required'));
    }
    

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

     try {
        await newUser.save();
        res.json({message : 'Signup successfull!'});
     } catch (error) {
        next(error);
     }

    
};

export const signin = async (req, res, next)=>{
    const { email, password } = req.body;

    if(!email || !password || email ==='' || password===''){
        next(errorHandler(400, 'All the fields are required'));
    }

    try {
        const validUser = await User.findOne({ email });
        if(!validUser){
           return next(errorHandler(404, 'Wrong Credentials!'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
           return  next(errorHandler(404, 'Wrong Credentials!'));
        }
        const token = jwt.sign(
            { id: validUser._id}, process.env.JWT_SECRET);

        const { password: pass, ...rest } = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true}).json(rest);
    } catch (error) {
        next(error);
    }
}