const mongoose = require('mongoose')

const connnectionString = process.env.MONGO_URI

mongoose.connect(connnectionString).then(res=>{
    console.log("Connected to MongoDB !")
}).catch(err=>{
    console.log("Connection Error !!", err)
})