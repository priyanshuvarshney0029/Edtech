const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const edtechRoutes=require('./routes/Edtech')
const questionRoutes=require('./routes/question')
const jeeModel = require('./models/JEE')
const neetModel = require('./models/NEET')
const tenthModel = require('./models/TENTH')
const twelfthModel = require('./models/TWELFTH');
const {seedDB,seedTenth,seedTwelfth} = require('./seedData');
const Twelfth = require('./models/TWELFTH');

// seedDb();
// seedTenth();
// seedTwelfth();

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/jee',async (req,res)=>{
    const jee = await jeeModel.find({}).populate('questions');
    // const questions = await jee.populate('questions')
    jee.forEach(item => {
        console.log(item.questions); // Accessing 'questions' for each document
    });
    // console.log(jee.questions);
    res.render('jee',{jee});
})

app.get('/neet',async (req,res)=>{
    const neet = await neetModel.find({}).populate('questions');
    // const questions = await jee.populate('questions')
    neet.forEach(item => {
        console.log(item.questions); // Accessing 'questions' for each document
    });
    res.render('neet',{neet});
})

app.get('/tenth',async (req,res)=>{
    const tenth = await tenthModel.find({}).populate('questions');
    res.render('tenth',{tenth});
})

app.get('/twelfth',async (req,res)=>{
    const twelfth = await twelfthModel.find({}).populate('questions');
    res.render('twelfth',{twelfth});
})

app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/submit',(req,res)=>{
    res.render('submit')
})
mongoose.connect('mongodb://127.0.0.1:27017/Ed-tech')
    .then(() => {
        console.log('DB connected successfully');
    })
    .catch((err) => {
        console.log('DB error');
        console.log(err);
    });

// Session configuration
const configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 24 * 7 * 60 * 60 * 1000,
        maxAge: 24 * 7 * 60 * 60 * 1000,
    },
};

// Middleware setup
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session(configSession));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// Routes
app.use(authRoutes);
app.use(edtechRoutes);
app.use(questionRoutes);



app.listen(8080, () => {
    console.log('Server connected at port 8080');
});
