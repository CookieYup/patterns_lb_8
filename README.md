# Patterns LB 8 — Express + React Proxy

Практична робота 8: серверна частина на Express та клієнтська частина на React з відображенням сторінок User, Admin, Super Admin через компоненти.

## Запуск backend

```bash
cd server
npm install
node server.js
```

Backend працює на http://localhost:5000

## Запуск frontend

```bash
cd client
npm install
npm start
```

Frontend працює на http://localhost:3000

У `client/package.json` налаштовано proxy на backend:

```json
"proxy": "http://localhost:5000"
```
