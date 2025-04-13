const express = require('express');
const app = express();
const cors = require('cors'); // เพิ่มบรรทัดนี้

const configRoutes = require('./routes/configs');
const statusRoutes = require('./routes/status');
const logsRoutes = require('./routes/logs');

app.use(cors()); // เพิ่มบรรทัดนี้เพื่อใช้ cors middleware

app.use(express.json());

app.get('/', (req, res) => {
    res.send('🛫 Drone API is ready! Use /configs/:id, /logs/:id, /status/:id');
  });

app.use('/configs', configRoutes);
app.use('/status', statusRoutes);
app.use('/logs', logsRoutes);

module.exports = app;