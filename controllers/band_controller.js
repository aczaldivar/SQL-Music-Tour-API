const bands = require('express').Router();
const db = require ('../models');
const { Band } =db;

bands.get('/', async(req,res)=>{
    try {
        const foundBands = await Band.findAll();
        res.status(200).json(foundBands);
    } catch(e){
        res.status(500).json(e);
    }
})

module.exports = bands;


