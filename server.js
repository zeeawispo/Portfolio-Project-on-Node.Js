const express = require("express");
const expressLayouts = require('express-ejs-layouts'); 
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + "/public"));
app.set("views", "./views");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

app.get("/", async function (req, res) {    
    res.render('index', {
      title: 'Welcome to my portfolio!',
      // Other data
    });
  }
);

app.get("/about", async function (req, res) {    
  res.render('about', {
    title: 'Welcome to my portfolio!',
    teamMembers: [
      { name: 'Syed Zeeshan Ahmed', position: 'CEO', image: 'zee.png' }
      // Add other team members as needed
    ]
  });
});

app.get("/contact", async function (req, res) {    
  res.render('contact', {
    title: 'Welcome to my portfolio!',
    // Other data
  });
});

app.get("/settings", async function (req, res) {    
  res.render('settings', {
    title: 'Welcome to my portfolio!',
    // Other data
  });
});

// Sample user data (you would use a database in a real application)
let user = {
    name: 'Syed Zeeshan Ahmed',
    email: 'zee@awispo.com',
    bio: 'Digital Marketer.',
    username: 'zee123',
    password: '********'
};

// Route to render the profile page
app.get('/profile', (req, res) => {
    res.render('profile', { user });
});

// Route to render the login page
app.get('/login', (req, res) => {
    res.render('login', { title: 'Welcome to my portfolio!' });
});

// Route to handle form submission and update user settings
app.post('/settings', (req, res) => {
    // Update user settings based on form data
    user.username = req.body.username;
    user.email = req.body.email;
    user.bio = req.body.bio;

    // Redirect back to the settings page
    res.redirect('/settings');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
