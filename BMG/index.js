const express = require('express')
const cors = require('cors')
const PORT = 5000

const app = express()
app.use(cors())

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`The server is running listening on port ${PORT}`)
})