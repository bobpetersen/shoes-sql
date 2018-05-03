app.controller('ShoeController', ['ShoeService', '$http', function (ShoeService, $http) {
    console.log('ShoeController has loaded');
    var self = this;
    self.message = 'I am the Shoe page';
    self.shoeShelf = ShoeService.shoe;
}
]);