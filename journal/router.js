const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const {Journal} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/', 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    let pageQuantity = parseInt(req.query.pageQuantity);
    let skipAmount = parseInt(req.query.activePage -1) * pageQuantity;

    const filter = {username: req.query.username};
    const sort = {};
    sort[req.query.sortfield] = req.query.sortdir;
console.log(sort);
    const queryCount = Journal
      .find(filter)
      .count();
    const queryPages = Journal
      .find(filter)
      .sort(sort)
      .skip(skipAmount)
      .limit(pageQuantity);

    return Promise.all([queryCount, queryPages])
      .then(([count, pages]) => {
        res.json({
          count,
          pages: pages.map(page => page.apiRepr())
        });
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
