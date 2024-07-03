const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const postDebug = (request, response) => {
  console.log("====== Request Begin ======")
  console.log(request.body)
  console.log(request.headers)
  console.log("======  Request End ======")
  response.status(201).json({ status: 'OK!', body_received: request.body, headers_received: request.headers })
}

app
  .route('/')
  .post(postDebug)

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening`)
})
