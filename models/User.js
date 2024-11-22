const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    // name: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher'], required: true }, // Role field for user type
    qualification: { type: String },
    dob: { type: Date },
    address: { type: String },
    state: { type: String },
    city: { type: String },
    pin: { type: String },
    contact: { type: String },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;
