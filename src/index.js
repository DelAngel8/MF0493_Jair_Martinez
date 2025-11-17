// AQUÍ ARRANCAMOS EL SERVIDOR
const express = require('express')
const app = express()

const {join} = require('path')

// Per poder veure per consola les peticions http que van arribant
const morgan = require('morgan')
app.use(morgan('dev'))

const port = process.env.PORT || 3000

app.use(express.static('public'))
// const router = require('./routes/index.js')
// app.use(router)
// sintaxi alternativa
// app.use(require('./routes/index.js'))

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => console.log(`Servidor web arrancat internament en http://localhost:${port}`))