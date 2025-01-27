const mongoose = require('mongoose')

const connectionString = process.env.MONGO_URI

mongoose.connect(connectionString)
.then(res => {
    console.log("Connected to MongoDB !")
})
.catch(err => {
    console.log("Connection Error !!", err)
})