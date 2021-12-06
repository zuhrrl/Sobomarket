// require environment variable
const envconfig = require('dotenv').config()
// express app
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = envconfig.parsed.PORT || 5000;
// required mongo database
require('./config/mongo').database

app.use(express.json());
// parse raw body request
app.use(bodyParser.raw({
  type: 'application/*+json'
}))

// require routes api
const indexRouter = require('./routes/api/api-route');

// index router
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})