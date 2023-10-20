const { Schema, model } = require("mongoose");

const nonPlayerCharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  prerequisites: {
    type: String,
    required: true,
  },
});


const nonPlayerCharacter = model("nonPlayerCharacter", nonPlayerCharacterSchema);

module.exports = nonPlayerCharacter;