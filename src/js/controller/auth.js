angular
  .module('skillsApp')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state){
  const vm = this;
  vm.user = {};

  function submit(){
    if(vm.registerForm.$invalid) return;
    $auth.signup(vm.user)
      .then(() => $state.go('login'));
  }

  vm.submit = submit;
}

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state){
  const vm = this;
  vm.credentials = {};

  function submit(){
    $auth.login(vm.credentials)
      .then(() => $state.go('usersIndex'));
  }

  vm.submit = submit;
}
