'use strict';

require('dotenv').config(); 

const server= require('./src/server');

const {db}=require('./src/index');


//connect the database


db.sync().then(() =>{

server.start(process.env.PORT|| 3001);
})

.catch(console.error);