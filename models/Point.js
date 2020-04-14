const { Schema } = require('mongoose')

const PointSchema = new Schema({
  address: String,
  display: { type: Boolean, default: true },
  email: String,
  name: String,
  problems: [String],
  coords: [Number, Number],
  jobs_count: Number,
  description: String
})

module.exports = PointSchema

/**
  address: "Россия, Калуга, Московская улица, 338А"
  display: true
  email: null
  name: "ООО 5Карманов"
  problems: ["Нет денежного потока. Соответственно нет возможнос… и  арендодателями, перед банками и государством."]
  coords: (2) [54.586281201202134, 36.24888296549169]
  jobs_count: 6
  description: "Признать всю отрасль пострадавшей, без деления на размеры малый, средний. После 250 сотрудников - бизнес считается крупным."
 */
