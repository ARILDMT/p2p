const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Простой роут для проверки работы сервера
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Импорт роутов для аутентификации и других модулей
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Остальные API-эндоинты (логика P2P-проверок, чаты, и т.д.) можно добавить здесь.

const server = app.listen(PORT, () => {
  console.log(`Backend запущен на порту ${PORT}`);
});

// Настройка Socket.IO для реального времени (чат, уведомления)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', socket => {
  console.log('Новое соединение:', socket.id);

  // При получении сообщения транслировать всем подключённым
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Пользователь отключился:', socket.id);
  });
});