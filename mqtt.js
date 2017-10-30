const config = require('./config');
const mqttClient = require('mqtt');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(config.mongo.host, (err, database) => {
  if (err) return console.log(err);

  let client = mqttClient.connect(config.mqtt.host, config.mqtt);

  client.on('connect', () => {
    client.subscribe('log/#', () => {
      client.on('message', (topic, message) => {

        console.log("Received '" + message + "' on '" + topic + "'");
        database.collection('notes').insert(JSON.parse(message), (err) => {
          if (err) return console.log("error: " + err);
            console.log("log successfully registered");
          });
      });
    });
  });

});