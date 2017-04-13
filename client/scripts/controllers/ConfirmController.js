myApp.controller('ConfirmController',['PizzaService', function(PizzaService) {
   console.log('ConfirmController');
   var confirm = this;
   confirm.confirmedPizzaObject = PizzaService.confirmedPizzaObject;
}]);
