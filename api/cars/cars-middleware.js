const Cars = require("./cars-model")
const vin = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try {
    const cars = await Cars.getById(req.params.id)
    if (!cars) {
      next({
          status: 404,
          message: `car with id ${req.params.id} is not found`
      })
    } else {
      req.cars = cars
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if (!vin) return next({
    status: 400,
    message: "vin is missing"
  }) 
  if (!make) return next({
    status: 400,
    message: "make is missing"
  })
  if (!model) return next({
    status: 400,
    message: "model is missing"
  })
  if (!mileage) return next({
    status: 400,
    message: "mileage is missing"
  })
  next()
}

const checkVinNumberValid = (req, res, next) => {
  if (vin.validate(req.body.vin)) {
    next()
  } else {
    next({
      status: 400,
      message: `vin ${req.body.vin} is invalid`
    })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
 try {
  const duplicate = await Cars.getByVin(req.body.vin)
  if (!duplicate) {
    next()
  } else {
    next({
      status: 400,
      message: `vin ${req.body.vin} already exists`
    })
  }
 } catch (err) {
   next(err)
 }
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}