# jamstack-api
API for a JAMstack tutorial!
https://www.nicosuave.net/post/jamstack-node-api/

## Quick Start - Local
```
# Start MongoDB
$ mongod --dbpath /path/to/db/ 

# Install Dependencies and Start API
$ git clone https://github.com/nsuave/jamstack-api.git
$ cd jamstack-api
$ npm install
$ npm start
```

## Quick Start - Docker
```
# Start MongoDB Container
$ docker run --name jamstack-db -d -p 27017:27017 mongo:latest mongod

# Start Docker Image for API
$ docker run --name jamstack-api -d -p 8008:8008 --link jamstack-db:mongo nsuave/jamstack-api
```

## POST
Need 'jam' and 'msrp' keys in the body of the request (x-www-form-urlencoded)

## GET
GET without an ID will return all JAM
Providing the ID of the resource in the URI will return the values for that specific JAM

## PUT
Need the ID of the resource in the URI
Need 'jam' and 'msrp' keys in the body of the request (x-www-form-urlencoded)

## DELETE
Need the ID of the resource in the URI