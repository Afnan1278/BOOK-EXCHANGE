const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
//const bodyParser = require('body-parser')
const app = express();
//db config
const mongoose = require('./config/keys');

//mongoose connect
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
//middleware
app.use(express.json());
//app.use(express.bodyParser());
//import Routes
const authRoute = require('./routes/user');
const postingRoute = require('./routes/post');
//route middelware
//app.use('/', require('./routes/index'));
app.use('/api/user',authRoute);
app.use('/api/post', postingRoute);



const PORT= 8000


app.listen(PORT, console.log(`Node server listening on port ${PORT}`));