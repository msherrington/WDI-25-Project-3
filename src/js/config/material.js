angular
.module('skillsApp')
.config(Material);

Material.$inject = ['$mdThemingProvider'];
function Material($mdThemingProvider) {
  // Extend the red theme with a few different colors
  var neonRedMap = $mdThemingProvider.extendPalette('red', {
    '500': 'f44336'
  });
  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('neonRed', neonRedMap);
  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('neonRed');
}
