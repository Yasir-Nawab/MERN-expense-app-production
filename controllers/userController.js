const { model } = require("mongoose");
const userModel = require("../models/userModel");

const loginController = async(req,res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email:email,password:password});
        if(!user)
        {
            return res.status(400).send("User Not found with email and password");
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send("User can't login");
    }
}

const registerController = async(req,res)=> {
    try{
        const {email} = req.body;
        const Email = await userModel.findOne({email:email});
        if(Email)
        {
            res.status(400).send("email already exist...try unique email");
        }
        else{
            const newUser = await new userModel(req.body);
            newUser.save();
            res.status(201).send(newUser);
        }
    }catch{
        res.status(400).send("user can't create or register");
    }
}

module.exports = {loginController,registerController};