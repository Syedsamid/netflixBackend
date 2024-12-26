import express from "express"
import adminModel from "../../models/Admins/Admin.js"
const router = express.Router()



router.get("/:id",async(req,res)=>{
    try {
        let userId = req.params.id;
        let getdata = await userModel.find({_id:userId})
        res.status(200).json(getdata)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.get("/getalladmin",async(req,res)=>{
    try {
        let allusers = await userModel.find({})
        res.status(200).json(allusers)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.put("/updateadmin/:id",async(req,res)=>{
    try {
        let userId = req.params.id;
        let userData = req.body;
        await userModel.updateOne({_id:userId},{$set:userData})
        res.status(200).json({msg:"admin data updated successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/deleteoneadmin/:id",async(req,res)=>{
    try {
        let userId = req.params.id;
        await userModel.deleteOne({_id:userId})
        res.status(200).json({msg:"admin you selected is deleted"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/deletealladmin",async(req,res)=>{
    try {
        let userData = await userModel.deleteMany({})
        res.status(200).json({msg: "All the admin are deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router