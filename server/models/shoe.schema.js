const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
    name: { type: String },
    cost: { type: Number}
});

module.exports = mongoose.model('shoes', shoeSchema);