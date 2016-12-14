(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: 'Admin',
      email: 'contact@kunalkamble.com',
      firstName: 'Kunal',
      lastName: 'Kamble' ,
      company: 'KK Inc.' ,
      address: 'Mavis Rd' ,
      city: 'Mississauga' ,
      state: '' ,
      biography: 'We are young and ambitious full service design and technology company. ' +
      'Our focus is JavaScript development and User Interface design.',
      postalCode : 'L5V 2L5'
    };
  }

})();
