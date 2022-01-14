const express = require('express');
const helmet = require('helmet');

const db = require('../data/db.js')

const Shoutouts = require('../data/shoutouts-model.js');

const server = express();

server.use(helmet());
server.use(express.json());
// server.get('/', async (req, res) => {
//   try {
//     const shoutouts = await db('shoutouts');
//     const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
//     res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
//   } catch (error) {
//     console.error('\nERROR', error);
//     res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
//   }
// });
server.get('/', async (req, res)=>{
  try{
    const shouts = await db('shouts')
    res.status(200).json({messageOfTheDay: process.env.MOTD, shouts});
  }catch(error){
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
})
// server.get('/', (req, res) => {
//   Shoutouts.find()
//   .then(shoutouts => {
//     res.status(200).json(shoutouts);
//   })
//   .catch (error => {
//     console.error('\nERROR', error);
//     res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
//   });
// });

server.post('/', (req, res) => {
  Shoutouts.add(req.body)
  .then(shoutout => {
    res.status(201).json(shoutout);
  })
  .catch (error => {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot add the shoutout' });
  });
});

module.exports = server;

