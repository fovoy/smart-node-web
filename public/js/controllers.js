angular.module('starter.controllers', [])
    .controller('workCtrl', ['$scope', 'consumerService', '$location', function ($scope, consumerService, $location) {
        $scope.sers = consumerService.all();
        $scope.host = $location.host();
    }])
    .controller('consumerServiceCtrl', ['$scope', '$routeParams', 'consumerService', 'sendOrder', '$http', function ($scope, $routeParams, consumerService, sendOrder) {
        var id = $routeParams.id;
        $scope.ser = consumerService.get(id);
        $scope.cantact = {};
        $scope.ph = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        $scope.submit = function () {
            sendOrder.send($scope.cantact)
        }
    }])
    .controller('storyCtrl', ['$scope', function ($scope) {
    }])
    .controller('contactCtrl', ['$scope', 'sendOrder', function ($scope, sendOrder) {
        $scope.sendOrder = function () {
            sendOrder.send();
        }
    }])
    .controller('homeCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
        $scope.toTop = function () {
            $location.hash('header')
        }
    }])
    .controller('productCtrl', ['$scope', '$routeParams', 'product', 'sendOrder', '$http', function ($scope, $routeParams, product, sendOrder) {
        var id = $routeParams.id;
        $scope.prod = product.get(id);
    }])
    .controller('productsCtrl', ['$scope', 'product', '$location', function ($scope, product, $location) {
        $scope.prods = product.all();
        $scope.host = $location.host();

    }])
    .controller('serversCtrl', ['$scope', function ($scope) {
    }])
    .controller('singleCtrl', ['$scope', function ($scope) {
    }])
    .controller('bookingCtrl', ['$scope', function ($scope) {
    }])

