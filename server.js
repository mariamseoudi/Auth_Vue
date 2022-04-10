/* eslint-disable */ 
const fastify = require('fastify')

const cors=require('cors');
const app=fastify();
const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const jwt = require('jsonwebtoken');

mongoose.connect( "mongodb+srv://admin:1234@cluster0.fy24x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const connection = mongoose.connection;
// make sure that MongoDB connected successfully
connection.once('open', () => {
    console.log("MongoDB connected!!");
});
app.register(require('fastify-cors'), { 
   
  })
const port=process.env.PORT||3000;
app.listen(port,(err)=>{
if(err) return console.log(err)
return console.log(port)})
app.get('/', (request, reply) => {
    reply.send("hello world")
  })
  app.post('/signup', (request, reply) => {
    user=new User({ name:request.body.name,email:request.body.email,password: bcrypt.hashSync(request.body.password, 10)})

    user.save((function (error,user) {
        if (error) {
        console.log(error._message)
        reply.send(error)
      } else {
        console.log('success')
        reply.send("succcess")
      }
     }))
    
   
  })
  
  app.get("/showUsers", (request, reply) => {
    
    User.find({}).exec(function (err, data) {
        reply.send(data)
    })

});
app.post('/login', (request, reply) => {
    User.findOne({ email: request.body.email }, (err, user) => {
      error={message:"nth"}
      if(err){
          reply.send('error')
      }
      else if (!user||!bcrypt.compareSync(request.body.password, user.password)) {
        reply.send(error=new Error(

          'invalid credentials'
        ))
      }
      else{let token = jwt.sign({ userId: user._id}, 'secretkey');
          reply.send({
        title: 'login sucess',
        token: token
      })}
      
      console.log(error.message)
      
     
    
  })
})
 