
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl.string('VIN', 128).notNullable().index();
    tbl.string('make', 128).notNullable().index();
    tbl.string('model', 128).notNullable().index();
    tbl.string('milage', 128)
    tbl.string('transmission', 128)
    tbl.string('status', 128)

  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
