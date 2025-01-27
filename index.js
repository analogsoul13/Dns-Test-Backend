require('dotenv').config()
require('./Connection/db')
const express = require('express')
const cors = require('cors')
const routes = require('./Routes/routes')


const dnsApp = express()

dnsApp.use(cors())
dnsApp.use(express.json())

dnsApp.use(routes)

const PORT = process.env.PORT || 3000

dnsApp.listen(PORT, () => {
    console.log("Server Running at :", PORT)
})

dnsApp.get('/', (req, res) => {
    res.send("<h1>DNS Server is Active</h1>")
})