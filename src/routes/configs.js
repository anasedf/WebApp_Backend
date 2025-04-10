const express = require('express');
const router = express.Router();
const { getDroneConfig } = require('../services/configService');

router.get('/:droneId', async (req, res) => {
  try {
    const config = await getDroneConfig(req.params.droneId);
    if (!config) return res.status(404).json({ message: 'Drone not found' });

    const { drone_id, drone_name, light, country, weight } = config;
    res.json({ drone_id, drone_name, light, country, weight });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
