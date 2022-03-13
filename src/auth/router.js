'use strict';

const express =require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {Users}=require('../index');

const basicAuth = require('./middleware/basicAuth');
const Bearer =require('./middleware/bearer');



router.post('/signup',signupFunc);
router.post ('/signin',basicAuth,signinFunc)
router.get('/user',Bearer, userHandler)

async function signupFunc(req, res) {
    const { username, password } = req.body;

    console.log(`${username} =>> ${password}`);

    try {
        const hashedPassword = await bcrypt.hash(password, 5);

        console.log( hashedPassword)
        
        const newUser = await Users.create({
            username: username,
            password: hashedPassword,
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
    }
}

async function signinFunc(req,res){
    res.status(200).send(req.user)
}

async function userHandler(req, res) {
    
    res.status(200).json(req.user);

}

module.exports =router;