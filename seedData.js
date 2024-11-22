const questionModel = require('./models/Question');
const jeeModel = require('./models/JEE');
const neetModel = require('./models/NEET');
const tenthModel = require('./models/TENTH');
const twelfthModel = require('./models/TWELFTH')


const jeeQuestion = [
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
]

async function seedDB(){
    // await Product.deleteMany({});
    const insertedQuestions = await questionModel.insertMany(jeeQuestion);

    // Step 2: Extract the _id of each inserted question
    const questionIds = insertedQuestions.map(q => q._id);

    // Step 3: Create or update a JEE document
    let jee = await jeeModel.findOne(); // Find the first JEE document
    if (!jee) {
        jee = new jeeModel({ questions: [] }); // Create a new JEE document if none exists
    }

    // Step 4: Add the questionIds to the JEE document
    jee.questions.push(...questionIds);

    // Step 5: Save the updated JEE document
    await jee.save();

    console.log("Data seeded successfully.");
}

const tenthQuestion = [
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
]

async function seedTenth(){
    // await Product.deleteMany({});
    const insertedQuestions = await questionModel.insertMany(tenthQuestion);

    // Step 2: Extract the _id of each inserted question
    const questionIds = insertedQuestions.map(q => q._id);

    // Step 3: Create or update a JEE document
    let tenth = await tenthModel.findOne(); // Find the first tenth document
    if (!tenth) {
        tenth = new tenthModel({ questions: [] }); // Create a new tenth document if none exists
    }

    // Step 4: Add the questionIds to the JEE document
    tenth.questions.push(...questionIds);

    // Step 5: Save the updated JEE document
    await tenth.save();

    console.log("Data seeded successfully.");
}

const twelfthQuestion = [
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
    {
        question: "Who discovered gravity?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctOption: 0,
        solution: "Isaac Newton discovered gravity.",
    },
]

async function seedTwelfth(){
    // await Product.deleteMany({});
    const insertedQuestions = await questionModel.insertMany(twelfthQuestion);

    // Step 2: Extract the _id of each inserted question
    const questionIds = insertedQuestions.map(q => q._id);

    // Step 3: Create or update a JEE document
    let twelfth = await twelfthModel.findOne(); // Find the first JEE document
    if (!twelfth) {
        twelfth = new twelfthModel({ questions: [] }); // Create a new JEE document if none exists
    }

    // Step 4: Add the questionIds to the JEE document
    twelfth.questions.push(...questionIds);

    // Step 5: Save the updated JEE document
    await twelfth.save();

    console.log("Data seeded successfully.");
}

module.exports = {seedDB,seedTenth,seedTwelfth};


// const neetQuestion = [
//     {
//         name:"Iphone 14pro",
//         img:"https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlwaG9uZTE0cHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" ,
//         price: 130000,
//         desc: "very costly, aukaat ke bahar" 
//     },
//     {
//         name:"Macbook m2 pro",
//         img:"https://media.istockphoto.com/id/1441194641/photo/macbook-pro-16-keyboard.webp?b=1&s=170667a&w=0&k=20&c=vgawd7HFjNtU4H4596IZkU2SE9YRXtz-ROUgSvndAPQ=",
//         price: 250000 , 
//         desc:"ye to bilkul hi aukaatke bahar"
//     },
//     {
//         name:"Iwatch",
//         price:51000,
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzEBWSIT--95okkMi-UzyJcT0RpNufBUVCw&usqp=CAU",
//         desc:"ye sasta hai lelo"
//     },
//     {
//         name:"iPad Pro", 
//         img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
//         price: 237900, 
//         desc: "life mein kuch cheese sirf dekhne ke liye hota hai"
//     },
//     {
//         name:"airpods" , 
//         img:"https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" , 
//         price: 25000 ,
//         desc: "badiya hai kamao kamao"
//     }
// ]

// const tenthQuestion = [
//     {
//         name:"Iphone 14pro",
//         img:"https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlwaG9uZTE0cHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" ,
//         price: 130000,
//         desc: "very costly, aukaat ke bahar" 
//     },
//     {
//         name:"Macbook m2 pro",
//         img:"https://media.istockphoto.com/id/1441194641/photo/macbook-pro-16-keyboard.webp?b=1&s=170667a&w=0&k=20&c=vgawd7HFjNtU4H4596IZkU2SE9YRXtz-ROUgSvndAPQ=",
//         price: 250000 , 
//         desc:"ye to bilkul hi aukaatke bahar"
//     },
//     {
//         name:"Iwatch",
//         price:51000,
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzEBWSIT--95okkMi-UzyJcT0RpNufBUVCw&usqp=CAU",
//         desc:"ye sasta hai lelo"
//     },
//     {
//         name:"iPad Pro", 
//         img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
//         price: 237900, 
//         desc: "life mein kuch cheese sirf dekhne ke liye hota hai"
//     },
//     {
//         name:"airpods" , 
//         img:"https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" , 
//         price: 25000 ,
//         desc: "badiya hai kamao kamao"
//     }
// ]

// const twelfthQuestion = [
//     {
//         name:"Iphone 14pro",
//         img:"https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlwaG9uZTE0cHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" ,
//         price: 130000,
//         desc: "very costly, aukaat ke bahar" 
//     },
//     {
//         name:"Macbook m2 pro",
//         img:"https://media.istockphoto.com/id/1441194641/photo/macbook-pro-16-keyboard.webp?b=1&s=170667a&w=0&k=20&c=vgawd7HFjNtU4H4596IZkU2SE9YRXtz-ROUgSvndAPQ=",
//         price: 250000 , 
//         desc:"ye to bilkul hi aukaatke bahar"
//     },
//     {
//         name:"Iwatch",
//         price:51000,
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzEBWSIT--95okkMi-UzyJcT0RpNufBUVCw&usqp=CAU",
//         desc:"ye sasta hai lelo"
//     },
//     {
//         name:"iPad Pro", 
//         img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
//         price: 237900, 
//         desc: "life mein kuch cheese sirf dekhne ke liye hota hai"
//     },
//     {
//         name:"airpods" , 
//         img:"https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" , 
//         price: 25000 ,
//         desc: "badiya hai kamao kamao"
//     }
// ]
