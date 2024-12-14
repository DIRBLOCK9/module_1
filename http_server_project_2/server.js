const express = require('express');
const app = express();
const port = 3028; // Порт, на якому працюватиме сервер

// Для обробки JSON-даних
app.use(express.json());

// GET / — повертає HTML-сторінку
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Відправляємо HTML-файл
});

// POST /data — приймає JSON-дані та відправляє відповідь
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  console.log(`Received data: Name = ${name}, Age = ${age}`);
  res.json({ message: 'Data received successfully', name, age });
});

// GET /status — повертає статус сервера
app.get('/status', (req, res) => {
  const status = {
    message: 'Server is running',
    port,
    uptime: process.uptime()
  };
  res.json(status);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

