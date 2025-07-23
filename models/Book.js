const {Schema,model} = require('mongoose');


const bookSchema = new Schema({
    name: String,
    author: String,
})

module.exports = model('Book',bookSchema);