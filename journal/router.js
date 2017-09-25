const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const faker = require('faker');

const {Journal} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();


/*
function seedJournalRecordData() {
  console.info('seeding Journal data');
  const seedData = [];
  for (let i=1; i<=1000; i++) {
    seedData.push({

      username: "demo@mail.com", //faker.internet.email,
      title: faker.lorem.sentence(),
      journalText: faker.lorem.paragraphs(),
      timestamp: faker.date.between(new Date(), new Date(99, 5, 24)),
      doctorCheckbox: faker.random.boolean(),
      importantCheckbox:faker.random.boolean(),
      weight: 100 + faker.random.number()%60,
      systolic: 120 + faker.random.number()%30,
      diastolic: 50 + faker.random.number()%40
    });
  }
  //console.log(seedData);
  //return;
  // this will return a promise
  //return Journal.insertMany(seedData);
}
*/

router.get('/', 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
//seedJournalRecordData();
    let pageQuantity = parseInt(req.query.pageQuantity);
    let skipAmount = parseInt(req.query.activePage -1) * pageQuantity;

    const filter = {username: req.query.username};
    if(req.query.title != '') filter['title'] = new RegExp(req.query.title, 'i');
    if(req.query.doctorCheckbox) filter['doctorCheckbox'] = req.query.doctorCheckbox;
    if(req.query.importantCheckbox) filter['importantCheckbox'] = req.query.importantCheckbox;
    const sort = {};
    sort[req.query.sortfield] = req.query.sortdir;
    const queryCount = Journal
      .find(filter)
      .count();
    const totalCount = Journal
      .find({username: req.query.username})
      .count();
    const queryPages = Journal
      .find(filter)
      .sort(sort)
      .skip(skipAmount)
      .limit(pageQuantity);

    return Promise.all([queryCount, totalCount, queryPages])
      .then(([count, total, pages]) => {
        res.json({
          count,
          total,
          pages: pages.map(page => page.apiRepr())
        });
      })
      .catch(err => res.status(500).json({message: 'Internal server error'}));
});

router.get('/:id', 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    return Journal
      .findById(req.params.id)
      .exec()
      .then(record => res.json(record.apiRepr()))
      .catch(err => res.status(500).json({message: 'Internal server error'}));
});

router.delete('/:id', 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    return Journal
      .findByIdAndRemove(req.params.id)
      .exec()
      .then(record => res.json(record.apiRepr()))
      .catch(err => res.status(500).json({message: 'Internal server error'}));
});

router.post('/:id', 
  passport.authenticate('jwt', {session: false}),
  jsonParser,
  (req, res) => {
  Journal
    .create({
      username: req.body.username,
      title: req.body.title,
      journalText: req.body.journalText,
      timestamp: req.body.timestamp,
      doctorCheckbox: req.body.doctorCheckbox,
      importantCheckbox: req.body.importantCheckbox,
      weight: req.body.weight,
      systolic: req.body.systolic,
      diastolic: req.body.diastolic
    })
    .then(updatedPost => res.status(201).json(updatedPost.apiRepr()));
});

router.put('/:id', 
  passport.authenticate('jwt', {session: false}),
  jsonParser,
  (req, res) => {
  Journal
    .findByIdAndUpdate(req.params.id,
    {
      username: req.body.username,
      title: req.body.title,
      journalText: req.body.journalText,
      timestamp: req.body.timestamp,
      doctorCheckbox: req.body.doctorCheckbox,
      importantCheckbox: req.body.importantCheckbox,
      weight: req.body.weight,
      systolic: req.body.systolic,
      diastolic: req.body.diastolic
    }, 
    {new: true})
    .then(updatedPost => res.status(201).json(updatedPost.apiRepr()));
});


module.exports = {router};
