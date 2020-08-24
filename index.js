const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'))
app.use(express.static('build'))

morgan.token('postData', function (req, res) {return JSON.stringify(req.body) })



let persons = [
    {
      "name": "Dan Abramov",
      "number": "22-545 -654654",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "jani petteri",
      "number": "6465456456155",
      "id": 11
    }
  ]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    let personCount = countPersons()
    let timeOfRequest = new Date()
    response.send(`
            <p>Phonebook has info for ${personCount} people</p>
            <p>${timeOfRequest}</p>
    `)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

const countPersons = () => {
    return persons.length
}

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})


app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name || isNaN(body.number) || body.number < 1) {
        return response.status(400).json({
            error: 'name or number cannot be empty or smaller than 1'
        })
    }

    if (persons.filter(person => person.name.toLocaleLowerCase() === body.name.toLocaleLowerCase()).length > 0) {
        return response.status(400).json({
            error: `${body.name} is already added to the phonebook`
        })
      }


    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    response.json(person)

    
})

const generateId = () => {
    return  Math.floor(Math.random() * (2**64 - 10**12)) + 10**12
}

//${personCount}
const PORT = process.env.PORT || 3001
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`)
})