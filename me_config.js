module.exports = {
  mqtt: {
    host: 'mqtt://YOUR_HOST_MQTT',
    port: 8883,
    clientId: `leni_${Math.random().toString(16).substr(2, 8)}`,
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 2,
    clean: true,
    encoding: 'utf8',
  },
  mongo: {
    host: 'YOUR_MONGO_URL',
  },
};
