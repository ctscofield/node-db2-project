// DO YOUR MAGIC
const express = require("express")

const router = express.Router()

const {} = require("./cars-middleware")

const Cars = require("./actions-model")


router.get("/", (req, res, next) => {
  
})


router.get("/:id", (req, res, next) => {
  // .then()
  // .catch(next)
})

router.post("/", (req, res, next) => {

})


module.exports = router