const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const postDebug = (request, response) => {
  console.log("====== POST Request Begin ======")
  console.log(request.body)
  console.log(request.headers)
  console.log("====== POST Request End ======")
  response.status(201).json({ status: 'OK!', body_received: request.body, headers_received: request.headers })
}

const hello = (request, response) => {
 console.log("====== GET Request Begin ======")
 console.log(request.headers)
 console.log("====== GET Request End ======")
 response.status(200).json({ status: 'OK!', headers_received: request.headers })
}

app
  .route('/')
  .post(postDebug)
  .get(hello)

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening`)
})
