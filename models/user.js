const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String
}, {
    collection: 'user'
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;