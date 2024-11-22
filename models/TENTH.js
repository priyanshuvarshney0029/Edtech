// models/Tenth.js
const mongoose = require('mongoose');

const TenthQuestionSchema = new mongoose.Schema({
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true }],
});

const Tenth = mongoose.model('Tenth', TenthQuestionSchema);
module.exports = Tenth;