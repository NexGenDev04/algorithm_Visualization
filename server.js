const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for bubble sort page
app.get('/bubblesort', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'bubblesort.html'));
});

// Route for binary search page
app.get('/binarysearch', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'binarysearch.html'));
});

// Route for merge sort page
app.get('/mergesort', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'mergesort.html'));
});
// Route for linear search page
app.get('/linearsearch', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'linearsearch.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
