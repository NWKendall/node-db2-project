const express = require('express')

const carsRouter = require('./data/cars-router');


const server = express();

server.use(express.json())

server.get("/api", (req, res) => {
  res.status(200).json({ message: "WORKING" })
});

server.use("/api/cars", carsRouter);

const port = 5000;

server.listen(port, () => console.log(`Server active on PORT ${port}`))