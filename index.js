const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const postDebug = (request, response) => {
  console.log(request.body)
  response.status(201).json({ status: 'OK!', received: request.body })
}

app
  .route('/')
  // POST endpoint
  .post(postDebug)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})
