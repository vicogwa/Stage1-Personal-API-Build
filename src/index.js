const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'healthy' });
});

app.get('/me', (req, res) => {
  res.status(200).json({
    name: 'Victora Francis',
    email: 'victoriafrancis885@gmail.com',
    github: 'https://github.com/vicogwa'
  });
});

app.listen(PORT, '127.0.0.1' () => {
  console.log(`Server running on port ${PORT}`);
});
