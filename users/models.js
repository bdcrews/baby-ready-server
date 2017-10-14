const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {type: String, default: ""},
  lastName: {type: String, default: ""},
  lmd: {type: Date},
  dueDate: {type: Date},
  bloodType: {type: String},
  rhFactor: {type: String},
  docName: {type: String},
  docPhone: {type: String},
  userNotes: {type: String},
  colorTheme: {type: String}
});

UserSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    username: this.username || '',
    firstName: this.firstName || '',
    lastName: this.lastName || '',
    lmd: this.lmd || '',
    dueDate: this.dueDate || '',
    bloodType: this.bloodType || '',
    rhFactor: this.rhFactor || '',
    docName: this.docName || '',
    docPhone: this.docPhone || '',
    userNotes: this.userNotes || '',
    colorTheme: this.colorTheme
  };
}

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
}

UserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
}

const User = mongoose.model('User', UserSchema);

module.exports = {User};
