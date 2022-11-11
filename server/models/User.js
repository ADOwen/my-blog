const { Schema, model } = require('mongoose');

const userModel = new Schema (
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trime: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minLength: 5
    },

  }
)

module.exports = userModel;

