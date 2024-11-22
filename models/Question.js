// models/Question.js
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: { type: [String], required: true }, // Array of four options
    correctOption: { type: Number, required: true }, // Index of the correct option (0-3)
    solution: { type: String, required: true }, // Explanation for the correct answer
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;