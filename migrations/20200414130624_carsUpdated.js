//this has nothing to do with the data... only the schema structure
//the .up() describes the changes to be applied (to the db schema)
exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.string('Model')
        tbl.string('VIN')
        tbl.decimal('Mileage')

        tbl.boolean('Clean')
        tbl.boolean('Salvage')
    })
  };
  
  // the .down describes how to undo the changes
  exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('Model');
        tbl.dropColumn('VIN');
        tbl.dropColumn('Mileage');
        tbl.dropColumn('Clean');
        tbl.dropColumn('Salvage');
    });
  };