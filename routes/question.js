const express=require('express')
const router = express.Router();

const NEET = require('../models/NEET');
const JEE = require('../models/JEE');
const Tenth = require('../models/TENTH');
const Twelfth = require('../models/TWELFTH');
const Questions = require('../models/Question');

// Show form to select category
router.get('/new', (req, res) => {
    res.render('selectCategory');
});

// Add questions to the selected category
router.post('/new', async (req, res) => {
    const { category, questions } = req.body; // category will be one of NEET, JEE, etc.
    console.log(category);
    console.log(questions);

    // Choose the correct model based on category
    let Model;
    switch (category) {
        case 'NEET':
            Model = NEET;
            break;
        case 'JEE':
            Model = JEE;
            break;
        case 'Tenth':
            Model = Tenth;
            break;
        case 'Twelfth':
            Model = Twelfth;
            break;
        default:
            return res.status(400).send('Invalid category');
    }

    try {
        // Step 1: Create questions in the Question collection
        const createdQuestions = await Questions.insertMany(questions);
        console.log(createdQuestions);

        // Step 2: Extract question IDs
        const questionIds = createdQuestions.map(q => q._id);

        // Step 3: Retrieve or create the category document
        let categoryDocument = await Model.findOne(); // Assuming one document per category
        if (!categoryDocument) {
            categoryDocument = new Model({ questions: [] });
        }

        // Step 4: Add the question IDs to the category document
        categoryDocument.questions.push(...questionIds);

        // Step 5: Save the updated category document
        await categoryDocument.save();

        res.status(201).send(`Questions added to ${category}`);
    } catch (error) {
        console.error('Error adding questions:', error);
        res.status(500).send('Error adding questions');
    }
});

module.exports=router;