const express = require("express");
const path = require("path");
const app = express();
const mongoose=require('mongoose');
const bodyparser=require("body-parser");
// mongodb connection
main().catch(err=> console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
    console.log("connected to mongodb succesfully!");
}
const port=8000;
//define mongoose schema
const contactSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String,
    desc:String
});
const contact=mongoose.model('contact',contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded({ extended: true }));

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get('/about', (req, res) => {
    const params = {};
    res.status(200).render('about.pug', params);
});

app.get('/services', (req, res) => {
    const params = {};
    res.status(200).render('services.pug', params);
});

app.get('/classinfo', (req, res) => {
    const params = {};
    res.status(200).render('classinfo.pug', params);
});

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});