const mongoose = require('mongoose')

const SearchDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add name'],
        unique: true,
        trim: true,
        maxlength: [40, 'name cannot be more than 40']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200']
    }
})
module.exports = mongoose.models.SearchDataSchema || mongoose.model('SearchDataSchema', SearchDataSchema);