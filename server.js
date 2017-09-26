require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const faker = require('faker');

const {router: usersRouter} = require('./users');
const {router: authRouter, basicStrategy, jwtStrategy} = require('./auth');
const {router: journalRouter, seedJournalRecordData} = require('./journal');



{
const {Journal} = require('./journal/models');
  console.info('seeding Demo Journal data');
  const seedData = [];
  const d = new Date();
  d.setMonth(d.getMonth() - 5);
  for (let i=1; i<=1000; i++) {
    seedData.push({

      username: "demo@mail.com", //faker.internet.email,
      title: faker.lorem.sentence(),
      journalText: faker.lorem.paragraphs(),
      timestamp: faker.date.between(new Date(), d),
      doctorCheckbox: faker.random.boolean(),
      importantCheckbox:faker.random.boolean(),
      weight: 100 + faker.random.number()%60,
      systolic: 120 + faker.random.number()%30,
      diastolic: 50 + faker.random.number()%40
    });
  } 
  // this will return a promise
  Journal.remove({username: "demo@mail.com"})
  .exec()
  .then(()=>{Journal.insertMany(seedData)})
  .catch(err => res.status(500).json({message: 'Internal server error'}));
}

mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config');

const app = express();

// Logging
app.use(morgan('common'));

// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});

app.use(passport.initialize());
passport.use(basicStrategy);
passport.use(jwtStrategy);

app.use('/api/users/', usersRouter);
app.use('/api/auth/', authRouter);
app.use('/api/journal/', journalRouter);

app.use('*', (req, res) => {
  console.log(req);
  return res.status(404).json({message: 'Not Found'});
});

// Referenced by both runServer and closeServer. closeServer
// assumes runServer has run and set `server` to a server object
let server;

function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT, () => {
        console.log(`Your app is listening on port ${PORT}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};

