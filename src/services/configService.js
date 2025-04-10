const axios = require('axios');
const CONFIG_SERVER = process.env.CONFIG_SERVER;

async function getDroneConfig(droneId) {
  const res = await axios.get(CONFIG_SERVER);
  return res.data.find(drone => drone.drone_id == droneId);
}

module.exports = { getDroneConfig };
