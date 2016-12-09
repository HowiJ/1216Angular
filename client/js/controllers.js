app.controller('FoodController', function($scope, FoodFactory){
    $scope.foods = [];
    console.log('FoodController started up');
    console.log(FoodFactory.count);

    FoodFactory.index(function(data) {
        console.log(data);
        $scope.foods = data;
    })

    $scope.takeFood = function(food) {
        console.log('TAKING FOOD', food);
        FoodFactory.takeFood(food, function() {
            FoodFactory.index(function(data) {
                console.log(data);
                $scope.foods = data;
            })
        })
    }

})

app.controller('NewFoodController', function($scope, FoodFactory) {
    console.log('NewFoodController started up');
    console.log(FoodFactory.count);
    $scope.newFood = '';
    $scope.foods = [];

    FoodFactory.index(function(data) {
        console.log(data);
        $scope.foods = data;
    })

    $scope.addFood = function() {
        if ($scope.newFood) {
            console.log('From controller', $scope.newFood);
            FoodFactory.create({name: $scope.newFood, count: 5}, function() {
                console.log('Back to controller');
                FoodFactory.index(function(data) {
                    console.log(data);
                    $scope.foods = data;
                })
            })

            $scope.newFood = '';

        }
    }
})