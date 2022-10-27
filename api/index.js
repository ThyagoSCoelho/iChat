const express = require('express')
const cors = require('cors')
const UserController = require('./controllers/UserController.js')
const NFController = require('./controllers/NFController.js')

const app = express()
app.use(cors({
  origin: '*'
}))
app.use(express.json())
app.use(xmlParser())

const port = 3000

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  UserController.read(req, res)
})

app.post('/user', (req, res) => {
  UserController.write(req, res)
})

app.delete('/user/:codifyUser', (req, res) => {
  UserController.delete(req, res)
})

app.post('/nf', (req, res) => {
  NFController.parse(req, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
