# authentication

## Technologies
vue 2.0
nodejs
Fastify js
mongoDB

## Running the server locally
```
$ cd auth
$ npm run server
```
## Running the Website locally
```
$ cd auth
$ npm run serve


```
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
params:{name:String ,email:String,password}
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
`POST /signup `
http://localhost:3000/signup
params:{email:String,password}
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
