const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String
    },
    imgUrl: {
        type: String
    }
})

module.exports = mongoose.model('Product', productSchema);