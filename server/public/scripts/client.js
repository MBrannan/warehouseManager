var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/customers' ,{
      templateUrl: '/views/templates/customers.html',
      controller: 'CustomersController',
      controllerAs: 'customers'
    })
    .when('/orders' ,{
      templateUrl: '/views/templates/orders.html',
      controller: 'OrdersController',
      controllerAs: 'orders'
    })
    .when('/warehouse' ,{
      templateUrl: '/views/templates/warehouse.html',
      controller: 'WarehouseController',
      controllerAs: 'warehouse'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('CustomersController',["$http", function($http) {
  console.log('Customers controller running');
  var self = this;
  self.customers = [];
  self.message = "Customers controller is the best!";

  getCustomers();

  function getCustomers() {
    $http.get('/customers')
      .then(function(response) {
        console.log(response.data);
        self.customers = response.data;
      });
  }

}]);

app.controller('OrdersController', function() {
  console.log('Orders controller running');
  var self = this;
  self.message = "Orders controller is the best!";

});

app.controller('WarehouseController', function() {
  console.log('Warehouse controller running');
  var self = this;
  self.message = "Warehouse controller is the best!";

});
