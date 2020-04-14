const mongoose = require('mongoose')

const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to mongo'))

function getOrBuildModel (modelName) {
  let model
  try {
    model = mongoose.model(modelName)
  } catch (err) {
    const schema = require('../models/' + modelName)
    model = mongoose.model(modelName, schema)
  }
  return model
}

const Point = getOrBuildModel('Point')

module.exports = {
  Point
}
