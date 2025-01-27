require('./Connection/db')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./Routes/routes')

dotenv.config()

const dnsApp = express()

dnsApp.use(cors())
dnsApp.use(bodyParser.json())

dnsApp.use(routes)

const PORT = 3000 || process.env.PORT

dnsApp.listen(PORT, () => {
    console.log("Server Running at :", PORT)
})

dnsApp.get('/', (req, res) => {
    res.send("<h1>DNS Server is Active</h1>")
})