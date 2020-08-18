const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_desc: {
        type: String,
        required: true
    },
    product_price: {
        type: Number ,
        required: true
    }
}, {
        collection: 'users'
    })

module.exports = mongoose.model('User', userSchema)