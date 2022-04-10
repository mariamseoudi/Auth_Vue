# Authentication
A website where the user is able to register,login,view registered users on login.
## Technologies
```
vue 2.0
nodejs
Fastify js
mongoDB
```
## Running the server locally
```
$ cd auth
$ npm run server
```
## Running the client side locally
```
$ cd auth
$ npm run serve


```
## Models
```

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
name:{type:String,
required: [true,'required!!']} ,
email: {
unique: [true,'email already exists'],
type: String,
match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
required: [true,'required!!']
  },
password:{ type:String,
 equired: [true,'required!!']}
})

const User = mongoose.model('User', userSchema);
module.exports = User;

```
### Routes

## Get list of users


### Request
```
`GET / `
http://localhost:3000/users
```

### Response

```
[{"_id":"6251fda83645918aee16b43c","name":"ahmad","email":"mm","password":"$2b$10$pccMZfhnrt9maXlag6vsr.TBS1MUvzEsgB4IxPoKeo.M.8tfXz9X6","__v":0},

{"_id":"625205a961f765e804fa3bf9","name":"","email":"","password":"$2b$10$5k5c6d.4tqsUbrCJHIXUW.0bJkaX9wDQQzIvQwChRlWUL.V0Xu1OK","__v":0}]

```
## Create a new user


### Request

```
`POST / `
http://localhost:3000/signup
params:{name:String ,email:String,password:String}
```

### Response

```
log: {
    child: [Function (anonymous)],
    [Symbol(fastify.disableRequestLogging)]: false
  },
  [Symbol(fastify.reply.isError)]: false,
  [Symbol(fastify.reply.errorHandlerCalled)]: false,
  [Symbol(fastify.reply.sent)]: false,
  [Symbol(fastify.reply.sentOverwritten)]: false,
  [Symbol(fastify.reply.serializer)]: null,
  [Symbol(fastify.reply.headers)]: { vary: 'Origin', 'access-control-allow-origin': '*' },
  [Symbol(fastify.reply.trailers)]: null,
  [Symbol(fastify.reply.startTime)]: undefined,
  [Symbol(fastify.reply.endTime)]: undefined
```
## look for an existing user

### Request
```
`POST / `
http://localhost:3000/signup
params:{email:String,password:String}
```

### Response

```
log: {
    child: [Function (anonymous)],
    [Symbol(fastify.disableRequestLogging)]: false
  },
  [Symbol(fastify.reply.isError)]: false,
  [Symbol(fastify.reply.errorHandlerCalled)]: false,
  [Symbol(fastify.reply.sent)]: false,
  [Symbol(fastify.reply.sentOverwritten)]: false,
  [Symbol(fastify.reply.serializer)]: null,
  [Symbol(fastify.reply.headers)]: { vary: 'Origin', 'access-control-allow-origin': '*' },
  [Symbol(fastify.reply.trailers)]: null,
  [Symbol(fastify.reply.startTime)]: undefined,
  [Symbol(fastify.reply.endTime)]: undefined
  ```
  ## Demo
  A Demo ia available in file Demo.mov in the repo or through
  this link:https://drive.google.com/file/d/1qPJEFIgLuomWpGRwrQ4LbuKbDDLbUHGf/view?usp=sharing
