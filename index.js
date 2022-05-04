const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
require('dotenv').config();

const app = express();
app.use(express.json());


//Available Routes


//Listen for connections
const port = process.env.PORT || 4000;
app.listen(port, () => {
   console.log(`Currently Listening at http://localhost:${port}`);
});
