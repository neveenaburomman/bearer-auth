# bearer-auth


in this lab we learned how to build an basic auth server with signin and sign up functions by the following steps :
- first as previously we create a database , to store the username and password for each user ,and we connect it with the postgres server .
- we add a route for signup and signin using post .for the sign up function we did the following : first we added the username + password then after having it in the server we will hash it by the bcrypt library and add it to our database 
- for the sign in ,as a server we will get an a [basic auth +long string ](encoded password) ,so first  we will make it an array and pop the user and password ,next decoded using base64 to have the username and the password ,and last thing we will send request to the database to see if that account authorized . 



# UML
[!UML]()

# MY LINKS

- [The pullrequest link](https://github.com/neveenaburomman/bearer-auth/pulls)

- [The herokuapp link](https://bearer-auth-neveen.herokuapp.com/)

- [The Action link](https://github.com/neveenaburomman/bearer-auth/actions)


