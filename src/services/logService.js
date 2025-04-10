const axios = require('axios');
const LOG_SERVER = process.env.LOG_SERVER;

async function getDroneLogs(droneId) {
  const res = await axios.get(`${LOG_SERVER}?filter=drone_id=${droneId}&sort=-created&perPage=25`);
  return res.data.items.map(log => ({
    drone_id: log.drone_id,
    drone_name: log.drone_name,
    created: log.created,
    country: log.country,
    celsius: log.celsius
  }));
}

async function createDroneLog(data) {
  const { drone_id, drone_name, country, celsius } = data;
  const res = await axios.post(LOG_SERVER, {
    drone_id,
    drone_name,
    country,
    celsius
  }, {
    headers: { 'Content-Type': 'application/json' }
  });
  return res.data;
}

module.exports = { getDroneLogs, createDroneLog };
