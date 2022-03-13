'use strict';

const express =require ('express');
require('dotenv').config();
const router= require('./auth/router')
const errorhandler=require('./error-handlers/500');
const notfoundpage=require('./error-handlers/404');

const app = express();

app.use(express.json()); //  method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(router);

app.get('/',(req,res)=>{
    res.send('server is alive')
})

app.use(errorhandler);
app.use('*',notfoundpage);



function start (port) {
    app.listen(port ,()=>{
    
        console.log(`i'm listening to ${port}`)
    });
    }  


module.exports = {
    app: app,
    start: start
}