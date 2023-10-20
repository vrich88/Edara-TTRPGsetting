const { Schema, model } = require("mongoose");

const playerCharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  prerequisites: {
    type: String,
    required: true,
  },
});


const playerCharacter = model("playerCharacter", playerCharacterSchema);

module.exports = playerCharacter;