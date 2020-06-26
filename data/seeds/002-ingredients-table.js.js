exports.seed = function(knex) {
  return knex('ingredients').insert([
    { 'ingredient-name': 'Ground beef'},
    { 'ingredient-name': 'Sour cream'},
    { 'ingredient-name': 'Marinara sauce'}, 
    { 'ingredient-name': 'Lasagna pasta'},
    { 'ingredient-name': 'Mascarpone'},
    { 'ingredient-name': 'Ladyfingers'},
    { 'ingredient-name': 'Cheese'},
    { 'ingredient-name': 'Tortillas'},
    { 'ingredient-name': 'Salt'},
    { 'ingredient-name': 'Black pepper'},
    { 'ingredient-name': 'Sugar'},
    { 'ingredient-name': 'Eggs'},
  ]);
};
