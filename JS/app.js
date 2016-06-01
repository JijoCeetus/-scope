var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, $sce) {
    $http.get("welcome.html")
    .then(function (response) {
        $scope.myWelcome = response.data;
    });

    $scope.toTrustedHTML = function (html) {
        return $sce.trustAsHtml(html);
    }

});