// app.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/length', (req, res) => {
  const input = req.body.input;
  const length = input.length;
  res.json({ length });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
