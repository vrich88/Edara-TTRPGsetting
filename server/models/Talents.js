const { Schema, model } = require("mongoose");

const talentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  prerequisites: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
  },
});


const Talent = model("Talent", talentSchema);

module.exports = Talent;