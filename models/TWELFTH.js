// models/Twelfth.js
const mongoose = require('mongoose');

const TwelfthQuestionSchema = new mongoose.Schema({
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true }],
});

const Twelfth = mongoose.model('Twelfth', TwelfthQuestionSchema);
module.exports = Twelfth;