const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    menuId: {
        type: mongoose.Schema.ObjectId,
        ref: "Menu",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Item", itemSchema)