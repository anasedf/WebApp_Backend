const express = require('express');
const router = express.Router();
const { getDroneLogs, createDroneLog } = require('../services/logService');

router.get('/:droneId', async (req, res) => {
  try {
    const logs = await getDroneLogs(req.params.droneId);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const log = await createDroneLog(req.body);
    res.json(log);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

module.exports = router;
