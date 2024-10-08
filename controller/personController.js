// controllers/personController.js
const person = require("../module/personModule");

// Create a new person
const createPerson = async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);
    const savedPerson = await newPerson.save();
    console.log("data save");

    res.status(201).json(savedPerson);
  } catch (error) {
    console.error("Error creating person:", error);
    res.status(500).json({ error: " Internal Server Error" });
  }
};

// Get all persons
const getAllPersons = async (req, res) => {
  try {
    const persons = await person.find();
    res.status(200).json(persons);
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllPerson = async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      (workType === "chef" || workType === "manager", workType === "waiter")
    ) {
      const personData = await person.find({ work: workType });

      res.status(200).json(personData);
    } else {
      res.status(404).json({ error: "invalid id" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }};
  const update = async (req, res) => {
    try {
      const personId = req.params.id;
      const updatePerson = req.body;
      const response = await person.findByIdAndUpdate(personId, updatePerson, {
        new: true,
        runValidators: true,
      });
      if (resp) {
        res.status(404).json({ error: "person not found" });
      }
      console.log("updated data");
      res.res(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "internal server error" });
    }
  };

module.exports = { createPerson, getAllPersons, getAllPerson ,update};
