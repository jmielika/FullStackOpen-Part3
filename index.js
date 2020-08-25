require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'))

morgan.token('postData', function (req, res) {return JSON.stringify(req.body) })

let people = []
Person.find({}).then(peopleFromDatabase => {
    people = people.concat(peopleFromDatabase)
})


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

app.get('/api/people', (request, response) => {
    Person.find({}).then(people => {
        response.json(people)
    })
})

app.get('/info', (request, response) => {
    Person.find({}).then(peopleFromDatabase => {
        people = [...peopleFromDatabase]
    })
    let personCount = people.length
    let timeOfRequest = new Date()
    response.send(`
            <p>Phonebook has info for ${personCount} people</p>
            <p>${timeOfRequest}</p>
    `)
})

app.get('/api/people/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).end()
            }
        })
        /*.catch(error => {
            console.log(error)
            response.status(400).send({ error: 'malformatted id' })
        })*/
        .catch(error => next(error))
})

app.put('/api/people/:id', (request, response, next) => {
    const body = request.body

    const person = new Person({
        name: body.name,
        number: body.number,
        _id: request.params.id
    })

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})



app.delete('/api/people/:id', (request, response, next) => {

    Person.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})


app.post('/api/people', (request, response, next) => {
    const body = request.body

    /*if (people.filter(person => person.name.toLocaleLowerCase() === body.name.toLocaleLowerCase()).length > 0) {
        return response.status(400).json({
            error: `${body.name} is already added to the phonebook`
        })
      }*/


    const person = new Person({
        name: body.name,
        number: body.number
    })

    people = people.concat(person)

    person.save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormattedPerson => {
            response.json(savedAndFormattedPerson)
        })
        .catch(error => next(error))
    
})

const errorHandler = (error, request, response, next) => {
    console.log(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
  
    next(error)
  }
  
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`)
})





