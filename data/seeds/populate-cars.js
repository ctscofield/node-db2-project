exports.seed = function (knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        {vin: "1GYEK63NX5R126180", make: "Jeep", model: "Wrangler", mileage: 146000, title: "clean", transmission: "manual" }
      ])
    })
}