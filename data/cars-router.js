const express = require('express');
const db = require("./db-config");

const router = express.Router()

router.get("/", (req, res) => {
  db('cars')
  .then(cars => {
    if(!cars){
      res.status(400).json({ message: "no cars database exists!"})
    } else {
      res.status(200).json(cars)
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ error: "failed to display cars" })

  })
})

router.post("/", (req, res) => {
  db('cars')
  .insert(req.body, 'id')
  .then(ids => {
    res.status(201).json(ids)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ error: "failed to create new car" })

  })

})

module.exports = router