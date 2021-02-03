const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
//login page
router.get('/login', (req,res) => res.send('login'));
//register page
//router.get('/register', (req,res) => res.send('register'));

//validation
const schema = {
    username: Joi.string().min(6).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(4).required()
};

router.post('/register', async (req,res) => {
   console.log('create user');
    //duplicate email
    const emailExist = await User.findOne({email: req.body.email});
        if (emailExist) return res.status(400).send('email already exists');
       
       
        //validate the input
        const {error} = Joi.validate(req.body, schema);
    if(error) return res.status(400).send(error.details[0].message);

    //Hashi
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed
        
    });
    try{
        const saveduser = await user.save();
        res.send(saveduser);
    }catch(err){
        res.status(400).send(err);
    }
});
//login schema validation
const schema1 = {
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(4).required()
};
router.post('/login', async (req,res) =>{
    //valid input
    const {error} = Joi.validate(req.body, schema1);
    if(error) return (res.status(400).send(error.details[0].message));
    
    //cehck if user exists
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('incorrect email or pass');
    //check for pass
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('incorrect email or pass');


    const token =  jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);



});
module.exports = router;