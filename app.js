const express = require('express');
const path = require('path');

const app = express();

// Set the public folder to serve static files (like script.js and style.css)
app.use(express.static(path.join(__dirname, 'public')));

// Set the views folder for HTML files
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/binarysearch', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'binarysearch.html'));
});

app.get('/bubblesort', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'bubblesort.html'));
});

app.get('/mergesort', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'mergesort.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
