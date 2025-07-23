const {Schema,model, default: mongoose} = require('mongoose');


const borrowSchema = new Schema({
    student : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    },
    book : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    },
    date: {
        type: Date,
        default: Date.now,
    }
    
})

module.exports = model('Borrow',borrowSchema);