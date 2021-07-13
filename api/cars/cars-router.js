// DO YOUR MAGIC
const express = require("express")

const router = express.Router()

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
} = require("./cars-middleware")

const Cars = require("./cars-model")


router.get("/", (req, res, next) => {
  Cars.get()
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(next)
})


router.get("/:id", (req, res, next) => {
  // .then()
  // .catch(next)
})

router.post("/", (req, res, next) => {

})

router.use((err, req, res, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})


module.exports = router