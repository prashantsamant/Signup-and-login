const Mongoose = require('mongoose');
Mongoose.Promise = require('bluebird');
//require('dotenv').config();

Mongoose.connect("mongodb+srv://admin:test123@cluster0.w4662.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});
exports.db=db;