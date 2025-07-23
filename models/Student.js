const {Schema,model} = require('mongoose');


const studentSchema = new Schema({
    name: String,
    email: String,
})

module.exports = model('Student',studentSchema);