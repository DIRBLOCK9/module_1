const express = require('express');
const app = express();
const port = 3000;

// Простий маршрут GET
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the HTTP Server!</h1>');
});

// Маршрут POST для отримання JSON-даних
app.use(express.json());  // Для того, щоб сервер міг працювати з JSON
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received successfully',
        receivedData: data
    });
});

// Маршрут GET для отримання статусу сервера
let requestCount = 0;
app.get('/status', (req, res) => {
    requestCount++;
    const status = {
        serverTime: new Date(),
        requestCount: requestCount
    };
    res.json(status);
});

// Логування кожного запиту
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

