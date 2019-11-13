const CompanyModel = require('../models/CompanyModel');
const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{
    const formData = {
        companyname: req.body.companyname,
        numberofemployees: req.body.numberofemployees,
        location: req.body.location,
        website: req.body.website,
        contact: req.body.contact,
        logo: req.body.logo
    }

    const newCompany = new CompanyModel(formData);

    newCompany
    .save()
    .then(newCompanyData=>{
        res.json(newCompanyData);
    })
    .catch(err=>{
        res.json(err)
    });

});


module.exports = router;