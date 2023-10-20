const { Schema, model } = require("mongoose");

const wildShapeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  prerequisites: {
    type: String,
    required: true,
  },
});


const wildShape = model("wildShape", wildShapeSchema);

module.exports = wildShape;