app.service('ShoeService', ['$http', function ($http) {
  console.log('Shoeservice is loaded');
  var self = this;
  self.shoeArray = [
    {
      name: 'Doc Martens',
      cost: 299
    },
    {
      name: 'Chuck Taylor High Tops',
      cost: 45
    },
    {
      name: 'Red Wing',
      cost: 250
    }
  ];
  self.getShoes = function() {
    $http({
      method: 'GET',
      url: '/shoes'
    })
      .then(function(response) {
        self.shoeArray = response.data.data;
        console.log(response);
      })
      .catch(function(response) {
        console.log('Error on GET', response.data.data);
      });
  };
  self.getShoes();
}]);
