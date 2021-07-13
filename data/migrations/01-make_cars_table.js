exports.up = function (knex) {
  return knex.schema
    .createTable('cars', table => {
      table.increments('id')
      table.text('vin', 17)
        .unique()
        .notNullable()
      table.text('make')
        .notNullable()
      table.text('model')
        .notNullable()
      table.number('mileage')
        .notNullable()
      table.text('title')
      table.table('transmission')
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('cars')
};
