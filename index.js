const { Console } = require('console')
const { EPIPE } = require('constants')
const express = require('express')
const path = require('path')

const publicPath = express.static(path.join(__dirname, 'client'))

const app = express()
app.use(publicPath)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(process.env.PORT || 5000, () => {
  console.log('express server started')
})
