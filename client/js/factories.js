app.factory('FoodFactory', function() {
    console.log('FACTORY')
    var foods = [{name: 'one', count: 5}];
    var factory = {};

    factory.index = function(callback) {
        callback(foods.slice(0));
    }

    factory.create = function(newFood, callback) {
        console.log('Inside Factory', newFood);
        foods.push(newFood);
        callback();
    }

    factory.takeFood = function(food, callback) {
        foods[foods.indexOf(food)].count--;
        callback();
    }

    factory.count = 0;

    return factory;
})