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

router.get("/:id", (req, res) => {
  db('cars')
  .where({ id: req.params.id})
  .then(cars => {
   
      res.status(200).json(cars)
    
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ error: "failed to display cars" })

  })
})


router.post('/', (req, res) => {
  db('cars')
  .insert(req.body, 'id')
  .then(ids => {
    res.status(201).json(ids)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ error: 'failed to create new car' })
  })
})

router.put("/:id", (req, res) => {
  db('cars')
  .where({ id: req.params.id })
  .update(req.body)
  .then (cars => {
    res.status(200).json(cars)    
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ error: "failed to display cars" })
  })
})

router.delete('/:id', (req, res) => {
  db('cars')
    .where({ id: req.params.id })
    .del()
    .then (cars => {
      res.status(200).json(cars)    
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "failed to display cars" })
    })
})


module.exports = router