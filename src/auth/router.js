'use strict';

const express =require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {Users}=require('../../user.js');

const basicAuth = require('./middleware/basicAuth');
const bearerAuth = require('./middleware/bearerAuth');



router.post('/signup',signupFunc);
router.post ('/signin',basicAuth,signinFunc)
router.get('/user', bearerAuth, userHandler)

async function signupFunc(req, res) {
    let { username, password } = req.body;

    console.log(`${username} =>> ${password}`);

    try {
        let hashedPassword = await bcrypt.hash(password, 5);

        console.log( hashedPassword)
        
        const newUser = await Users.create({
            username: username,
            password: hashedPassword
        })
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
    }
}

async function signinFunc(req,res){
    res.status(200).send(req.user)
}

async function userHandler(req, res) {
    // send the user information to the client & create new repo
    res.status(200).json(req.user);

}

module.exports =router;