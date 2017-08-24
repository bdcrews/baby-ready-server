const mongoose = require('mongoose');

const personalDataSchema = mongoose.Schema({
  lmd: {type: Date},
  dueDate: {type: Date},
  lastMaintenance: {type: Date, default: Date.now},
  frequency: {type: Number}
});

personalDataSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    lmd: this.part,
    status: this.status,
    needsRepair: this.needsRepair,
    lastMaintenance: this.lastMaintenance,
    frequency: this.frequency
  };
}

const UserDataRecord = mongoose.model('PersonalData', personalDataSchema);

module.exports = {UserDataRecord};