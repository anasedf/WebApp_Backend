const express = require('express');
const router = express.Router();
const { getDroneConfig } = require('../services/configService');

router.get('/:droneId', async (req, res) => {
  try {
    const config = await getDroneConfig(req.params.droneId);
    if (!config) return res.status(404).json({ message: 'Drone not found' });

    res.json({ condition: config.condition });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
