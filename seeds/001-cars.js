
exports.seed = function(knex) {
  return knex('cars')
    .truncate()
    .then(function () {
      const carsTest = [
        { 
          VIN: 'test123',
          make: 'Honda',
          model: 'Fit',
          milage: 49392,
          transmission: 'manual',
          status: 'clean'
        },
        { 
          VIN: 'test456',
          make: 'Kia',
          model: 'Forte',
          milage: 80000,
          transmission: 'automatic',
          status: 'clean'
        },
        { 
          VIN: 'test789',
          make: 'Nissan',
          model: 'Xterra',
          milage: 200000,
          transmission: 'manual',
          status: null
        }
      ];
      // Inserts seed entries
      return knex('cars').insert(carsTest);
    });
};
