const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const {Journal} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/', 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    //let pageQuantity = parseInt(req.query.location.pageQuantity);
    //let skipAmount = parseInt(req.query.location.currentPage) * pageQuantity;
    console.log(req.query.filter);


/*
Promise.all([countPromise, pagePromise])
.then(([count, page]) => res.json({
total: count,
documents: page
}))
const countPromise = Journal.find().count()

app.get('/', (req, res) => {
  User.lastLoggedin() // ONE QUERY
    .then((user) => Promise.all([user, user.getLastComments()]))
    .then(([user, comments] => res.json({user, comments})))
});
*/


    return Journal
      .find(req.query.filter)
      .sort(req.query.sort)
      //.skip(skipAmount)
      //.limit(pageQuantity)
      .exec()
      .then(records => {
        res.json(
          records.map(record => record.apiRepr()));
//
//        let entryCount;
//        Journal
//          .find(req.query.filter)
//          .count()
//          .exec()
//          .then((cnt) => {
//            res.json({
//              count: records.length,
//              journal: records.map(record => record.apiRepr())
//            });
//          });
        })
      .catch(err => res.status(500).json({message: 'Internal server error'}));
});

router.get('/:id', 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    console.log(req.params.id);
    return Journal
      .findById(req.params.id)
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
