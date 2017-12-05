# jamstack-api
API for a JAMstack tutorial!

## Requirements

config/db.js:
```
module.exports = {
  url : "mongodb://YOUR_URL_HERE:YOUR_PORT_HERE"
};
```

## Quick Start
```
$ npm install
$ npm start
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