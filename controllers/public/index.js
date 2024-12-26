import express from "express";
import adminModel from "../../models/Admins/Admin.js";
import usersModel from "../../models/Users/Users.js";
import videosModel from "../../models/Video/Videos.js";
import jwt from "jsonwebtoken";
import config from "config"
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/addadmin",async(req,res)=>{
    try {
        let userInp = req.body;

        let checkEmail = userInp.email;
        let dublicateCheck = await adminModel.find({email: checkEmail})

        if(!dublicateCheck){
            return res.status(200).json({msg: "admin already exists"})
        }

        let hashPass = await bcrypt.hash(userInp.password,10);
        userInp.password = hashPass

        let SECRET_KEY = config.get("SECRET_KEY");
        let sendtoken = jwt.sign({dublicateCheck},SECRET_KEY,{expiresIn: "1hr"})

        await adminModel.create(userInp);
        res.status(200).json({msg:`admin added successfully 🏳️‍⚧️!`, token:sendtoken})
    } catch (error) {
        console.log(error);
        res.status(401).json({msg:error})
    }
})

router.post("/adduser",async(req,res)=>{
    try {
        let userInp = req.body;

        let checkEmail = userInp.email;
        let dublicateCheck = await adminModel.find({email: checkEmail})

        if(!dublicateCheck){
            return res.status(200).json({msg: "user already exists"})
        }

        let hashPass = await bcrypt.hash(userInp.password,10);
        userInp.password = hashPass

        let SECRET_KEY1 = config.get("SECRET_KEY");
        let sendtoken = jwt.sign({dublicateCheck},SECRET_KEY1,{expiresIn: "1hr"})

        
        await usersModel.create(userInp)
        res.status(200).json({msg:`user added successfully`,token:sendtoken})
    } catch (error) {
        console.log(error);
        res.status(401).json({msg:error})
    }
})

router.post("/addvideo",async(req,res)=>{
    try {
        let  videoInp = req.body;
        await videosModel.create(videoInp)
    } catch (error) {
        console.log(error);
        res.status(401).json({msg:error})
    }
})

router.post("/login",(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg:error})
    }
})

export default router