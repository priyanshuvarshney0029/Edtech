// models/NEET.js
const mongoose = require('mongoose');

const NEETQuestionSchema = new mongoose.Schema({
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true }],
});

let NEET = mongoose.model('NEET', NEETQuestionSchema);
module.exports = NEET;