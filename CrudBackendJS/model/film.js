const mongoose = require('mongoose');

const filmschema = new mongoose.Schema({

    name : String,
    img : String,
    Summary : String

});

module.exports = mongoose.model('Film',filmschema);