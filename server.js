'use strict';

const http = require('http');
const express = require('express');
const app = express();
// const sequelize = require('sequelize');

// import api
// const nameApi = require('./Api/name')

// Use api
// app.use("/", nameApi)

// connect to Postgres


const server = http.createServer(app);
const port = 8899;
server.listen(port);
console.debug('Server listening on port ' + port);
