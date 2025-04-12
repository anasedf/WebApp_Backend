const axios = require('axios');
const CONFIG_SERVER = process.env.CONFIG_SERVER;

async function getDroneConfig(droneId) {
  const res = await axios.get(CONFIG_SERVER);
  
  // ตรวจสอบก่อนว่าได้ array จริงไหม
  const drones = Array.isArray(res.data) ? res.data : res.data?.data || [];
  
  if (!Array.isArray(drones)) {
    throw new Error('Invalid data format from Config Server');
  }

  return drones.find(drone => drone.drone_id == droneId);
}

module.exports = { getDroneConfig };
