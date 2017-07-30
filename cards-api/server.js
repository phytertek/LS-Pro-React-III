const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const CardSchema = new mongoose.Schema({
  owner: { type: String, required: true },
  photo: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [
    { 
      owner: { type: String, required: true },
      comment: { type: String, required: true }
    },
  ]
})

const Card = mongoose.model('Card', CardSchema)

app.get('/cards', (req, res) => {
  Card.find((err, cards) => {
    if (cards.length > 0) res.send(cards)
    else if (err) res.status(400).send(err)
    else res.send({ error: 'No cards found'}) 
  })
})

app.post('/cards', (req, res) => {
  const card = new Card(req.body)
  card.save((err, newCard) => {
    if (newCard) res.status(201).send(newCard)
    else if (err) res.status(400).send(err)
    else res.status(400).send({ error: 'Something went wrong'})
  })
})

mongoose.connect('mongodb://lscspcuser:lscspcuser@ds028310.mlab.com:28310/ls-cs-precourse', {
  useMongoClient: true,
  promiseLibrary: global.Promise
}, () => {
  console.log('DB connected')
  app.listen(5000, () => {
    console.log('Server running on port 5000')
  })
})

