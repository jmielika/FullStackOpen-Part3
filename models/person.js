const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)

/*
if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}*/

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true
  }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

//const Person = mongoose.model('Person', personSchema)

module.exports = mongoose.model('Person', personSchema)