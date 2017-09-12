const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const {Journal} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/', 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    return Journal
      .find(req.query)
      .exec()
      .then(user => res.json(user[0].apiRepr()))
      .catch(err => res.status(500).json({message: 'Internal server error'}));
});

router.post('/:id', 
  passport.authenticate('jwt', {session: false}),
  jsonParser,
  (req, res) => {

    console.log("AAAAA");
    console.log(req.body);
    console.log("AAAAA");

  Journal
    .create({
      userid: req.body.userid,
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


module.exports = {router};
