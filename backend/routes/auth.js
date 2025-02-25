const express = require('express');
const router = express.Router();

// Пример структуры пользователей (в дальнейшем заменить на базу данных)
const users = [];

// Регистрация пользователя
router.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  // Здесь должна выполняться валидация данных и шифрование пароля
  const newUser = { id: users.length + 1, username, password, email, xp: 0, rating: 0 };
  users.push(newUser);
  res.status(201).json({ message: 'Пользователь зарегистрирован', user: newUser });
});

// Логин пользователя
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: 'Успешный вход', user });
  } else {
    res.status(401).json({ message: 'Неверные данные' });
  }
});

module.exports = router;