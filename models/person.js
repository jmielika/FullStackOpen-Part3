const mongoose = require('mongoose')
const { ResumeToken } = require('mongodb')

mongoose.set('useFindAndModify', false)

/*
if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}*/

const url = process.env.MONGODB_URI

console.log('connecting to', url)
  
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Person = mongoose.model('Person', personSchema)

/*if (process.argv.length<4) {
  Person.find().then(result => {
    console.log("phonebook:")
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}

/*if (process.argv.length === 5) {
  console.log(process.argv[3], process.argv[4])

  const nameArg = process.argv[3]
  const numberArg = process.argv[4]


  const person = new Person({
    name: nameArg,
    number: numberArg,
  })

  person.save().then(response => {
    console.log(`added ${nameArg} number ${numberArg} to phonebook`)
    mongoose.connection.close()
  })
}*/

module.exports = mongoose.model('Person', personSchema)