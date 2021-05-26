// Requires express
const express = require('express');
const app = express();

// Requires data from data.json file
const data = require('./data.json').projects;

// Sets view to pug after installing
app.set('view engine', 'pug');

// Displays static files in public folder
app.use('/static', express.static('public'));

// Displays home page
app.get('/', (req, res) => {
  res.render('index');
});

// Displays about page
app.get('/about', (req, res) => {
  res.render('about');
});

// Displays projects
app.get('/:id', (req, res) => {
  res.render('data', {
    project_name: data[req.params.id].project_name,
  });
});

// Displays 404 error when page is not found
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Allows for localhost 3000 and logs to console make sure its working
app.listen(3000, () => {
  console.log('Listening');
});
