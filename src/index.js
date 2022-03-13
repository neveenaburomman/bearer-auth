'use strict'


const{Sequelize,DataTypes}=require('sequelize');// return object with two properties 
const dotenv = require("dotenv");
dotenv.config();
const User =require('./auth/models/user');



const POSTGRES_URL  = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3

console.log(POSTGRES_URL);
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

const sequelize = new Sequelize(POSTGRES_URL , sequelizeOptions);





module.exports={
    db :sequelize, //for connection ,we will use it the index.js 
    Users: User(sequelize,DataTypes),//for creating the table and we will use it in our routes
    
}