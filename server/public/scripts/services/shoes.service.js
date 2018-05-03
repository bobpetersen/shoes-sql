app.service('ShoeService', [
  '$http',
  function ($http) {
    console.log('Shoeservice is loaded');
    var self = this;
    self.shoe = {
      list: []
    };
    self.newShoe = {};
    self.shoeArray = [{
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
    self.getShoes = function () {
      $http({
          method: 'GET',
          url: '/shoes'
        })
        .then(function (response) {
          self.shoe.list = response.data;
          console.log(response);
        })
        .catch(function (response) {
          console.log('Error on GET', response.data.data);
        });
    }; // end getShoes

    self.deleteShoe = function (shoeToDelete) {
      $http({
          method: 'DELETE',
          url: '/shoes',
          params: shoeToDelete
        })
        .then(function (response) {
          console.log('success on DELETE ', response);
          self.getShoes();
        })
        .catch(function (error) {
          console.log('error on DELETE ', error);
        });
    }; //end deleteTodo

    // self.createShoe = function () {
    //     $http({         // small step would be to add console log here first ('new task', self.createTodo)
    //         method: 'POST',
    //         url: '/shoes',
    //         data: self.newShoe,
    //     }).then(function successCallback(response) {
    //         console.log('success on POST ', response);
    //         self.displayArray();
    //     }).catch(function (error) {
    //         console.log('error on POST ', error);
    //     })
    // }//end createShoe
    self.getShoes();
  }
]);