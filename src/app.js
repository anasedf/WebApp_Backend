const express = require('express');
const app = express();

const configRoutes = require('./routes/configs');
const statusRoutes = require('./routes/status');
const logsRoutes = require('./routes/logs');

app.get('/', (req, res) => {
    res.send('🛫 Drone API is ready! Use /configs/:id, /logs/:id, /status/:id');
  });
  
app.use(cors());

app.use(express.json());

app.use('/configs', configRoutes);
app.use('/status', statusRoutes);
app.use('/logs', logsRoutes);

module.exports = app;
