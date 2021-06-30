const express = require('express');
const { data } = require();

const app = express();
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/about', (req, res, next) => {
  res.render('about');
  next();
});
app.get('/', (req, res) => {
  res.render('data.json', {});
});

app.get('/', (req, res) => {
  res.render('index');
});
app.listen(3000, () => {
  console.log('listening');
});
