const config = require('./config');
const mqttClient = require('mqtt');
const { MongoClient } = require('mongodb');

MongoClient.connect(config.mongo.host, (err, db) => {
  if (err) console.log(err);

  const client = mqttClient.connect(config.mqtt.host, config.mqtt);

  client.on('connect', () => {
    client.subscribe('log/#', () => {
      client.on('message', (topic, message) => {
        console.log(`Received '${message}' on '${topic}'`);
        db.collection('notes').insert(JSON.parse(message), e =>
          ((e) ? console.log(`error: ${err}`) : console.log('log successfully registered')));
      });
    });
  });
});
