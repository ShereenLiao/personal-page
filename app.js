const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())
//To specifies the root directory from which to serve static assets.
app.use(express.static(path.join(__dirname, 'public')));
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//To use EJS template engine
app.engine('ejs', ejsMate);

// *********************************************
// Root - renders the home page
// *********************************************
app.get('/', (req, res) => {
    // res.render('home')
    res.render('home');
});


// *********************************************
// Projects - renders the projects page
// *********************************************
app.get('/projects', (req, res) => {
    res.render('projects/index.ejs');
});


// *********************************************
// Experiences - renders the experiences page
// *********************************************
app.get('/experiences', (req, res) => {
    res.render('experiences/index.ejs');
});

const port=process.env.PORT||3000;

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
})