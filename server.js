
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// const sequelize = require('sequelize');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// import api
// const nameApi = require('./Api/name')

// Use api
// app.use("/", nameApi)

// connect to Postgres


const server = http.createServer(app);
const port = process.env.PORT || 8899;
server.listen(port);
// eslint-disable-next-line no-console
console.debug(`Server listening on port ${port}`);
