const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//const mongoDB = 'mongodb://localhost/book-exchange';
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true});
mongoose.Promise = global.Promise;
module.exports = mongoose;