// routes/PersonRoutes.js
const express = require('express');
const { createPerson, getAllPersons,getAllPerson, update } = require('../controller/personController');

const router = express.Router();

// Route to create a new Person
router.post('/createPerson', createPerson);

// Route to get all Persons
router.get('/getAllPersons', getAllPersons);
router.get('/getAllPerson/:workType',getAllPerson);
router.put('/update/:id',update)
module.exports = router;
