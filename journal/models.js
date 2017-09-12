const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const JournalSchema = mongoose.Schema({
  userid: {type: String, required: true},
  title: {type: String},
  journalText: {type: String, default: ""},
  timestamp: {type: Date, default: Date.now},
  doctorCheckbox: {type: Boolean, default: false},
  importantCheckbox: {type: Boolean, default: false},
  weight: {type: Number},
  systolic: {type: Number},
  diastolic: {type: Number}
});

JournalSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    userid: this.userid || '',
    title: this.title || '',
    journalText: this.journalText || '',
    timestamp: this.timestamp || '',
    doctorCheckbox: this.doctorCheckbox || false,
    importantCheckbox: this.importantCheckbox || false,
    weight: this.weight || '',
    systolic: this.systolic || '',
    diastolic: this.diastolic || ''
  };
}

const Journal = mongoose.model('Journal', JournalSchema);

module.exports = {Journal};
