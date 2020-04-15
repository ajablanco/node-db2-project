
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, Make: "Mazda", Model:"3", VIN:"TEST", Mileage: 90000, Clean: false, Salvage: false},
        {id: 2, Make: "LAMBO", Model:"test", VIN:"TEST", Mileage: 80000, Clean: true, Salvage: false},
        {id: 3, Make: "Chevy", Model:"Silverado", VIN:"TEST", Mileage: 120000, Clean: true, Salvage: false},
        {id: 4, Make: "Tesla", Model:"X", VIN:"TEST", Mileage: 10, Clean: true, Salvage: false},
        {id: 5, Make: "Audi", Model:"R8", VIN:"TEST", Mileage: 69000, Clean: true, Salvage: false},
      ]);
    });
};
