'use strict';


const base64 = require('base-64');
const {Users}=require('../index.js');


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
            const user = await Users.findOne({where:{username:username}});
            const valid = await bcrypt.compare(password,user.password);
            if(valid) {
                next()
            } else {
                next('user is not valid')
            }
        } catch(error) {
            next(error.message);
        }
    }
}

module.exports = basicAuth;