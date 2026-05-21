const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [
  { id: 1, name: 'user1', email: 'user@example.com', role: 'USER', warnings: 0 },
  { id: 2, name: 'Adm1', email: 'admin@example.com', role: 'ADMIN', warnings: 0 },
  { id: 3, name: 'SuperAdm', email: 'super@example.com', role: 'SUPER_ADMIN', warnings: 0 }
];

app.get('/', (req, res) => {
  res.json({ message: 'Express server for Practical Work 8 is running' });
});

app.get('/api/users', (req, res) => {
  console.log('GET /api/users');
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({ message: 'Користувача не знайдено' });
  }

  console.log(`GET /api/users/${id}`);
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({ message: 'Потрібно вказати name, email та role' });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    role,
    warnings: 0
  };

  users.push(newUser);
  console.log('POST /api/users', newUser);
  res.status(201).json(newUser);
});

app.patch('/api/users/:id/role', (req, res) => {
  const id = Number(req.params.id);
  const { role } = req.body;
  const allowedRoles = ['USER', 'ADMIN', 'SUPER_ADMIN'];

  if (!allowedRoles.includes(role)) {
    return res.status(400).json({ message: 'Некоректна роль користувача' });
  }

  const user = users.find((item) => item.id === id);
  if (!user) {
    return res.status(404).json({ message: 'Користувача не знайдено' });
  }

  user.role = role;
  console.log(`PATCH /api/users/${id}/role`, role);
  res.json(user);
});

app.patch('/api/users/:id/warning', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({ message: 'Користувача не знайдено' });
  }

  user.warnings += 1;
  console.log(`PATCH /api/users/${id}/warning`);
  res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const exists = users.some((item) => item.id === id);

  if (!exists) {
    return res.status(404).json({ message: 'Користувача не знайдено' });
  }

  users = users.filter((item) => item.id !== id);
  console.log(`DELETE /api/users/${id}`);
  res.json({ message: 'Користувача видалено' });
});

app.listen(PORT, () => {
  console.log(`Backend started on http://localhost:${PORT}`);
});
