'use strict';


const base64 = require('base-64');
const {Users}=require('../../index');





async function basicAuth(req,res,next) {

    if(req.headers['authorization']) {

        let basicHeaderParts= req.headers.authorization.split(' ');

        console.log(basicHeaderParts);

        let encodedPart = basicHeaderParts.pop(); //encoded(username:password)
          console.log(encodedPart);
          
        let decoded = base64.decode(encodedPart); //username:password
        console.log(decoded);

        let [username,password]= decoded.split(':'); //[username: password]
        // console.log('username');
        
        try {
            let user = await Users.authenticateBasic(username,password);

            req.user=user;
            next();
            
        } catch(error) {
            next(error.message);
        }
    }
}

module.exports = basicAuth;