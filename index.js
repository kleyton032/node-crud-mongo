const express = require('express')
const PORT = 3005
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./src/routes/index'))

app.listen(3005, () => {
    console.log('Server rodando na porta', 3005)
});