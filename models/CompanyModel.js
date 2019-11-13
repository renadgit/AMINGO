

// Import mongoose
const mongoose = require('mongoose');

// Assign the Schema object
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    companyname: {
        type: String,
        required: true
    },
    numberofemployees: {
        type: Number,
        required: true
    },
    location: {
        type: String
    },
    website: {
        type: String
    },
    contact: {
        type: String,
        
    },
    logo: {
        type: String,
    
    },

});

module.exports = CompanyModel = mongoose.model('company', CompanySchema);