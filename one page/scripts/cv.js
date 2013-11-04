angular.module('cv').
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/overview', {templateUrl: 'cv/printable', controller: printableCtrl}).
    otherwise({redirectTo: '/overview'});
}]).run(function($rootScope, $location) {
    $rootScope.location = $location;
});