const mongoose = require('mongoose')
const Schema = mongoose.Schema

// products schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: false
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = Products = mongoose.model("products", ProductSchema);