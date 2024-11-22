// models/JEE.js
const mongoose = require('mongoose');

const JEEQuestionSchema = new mongoose.Schema({
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true }],
});

const JEE = mongoose.model('JEE', JEEQuestionSchema);
module.exports = JEE;