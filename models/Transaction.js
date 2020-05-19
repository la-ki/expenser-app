const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Molimo Vas unesite tekst']
    },
    amount: {
        type: Number,
        required: [true, 'Molimo Vas unesite iznos']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);