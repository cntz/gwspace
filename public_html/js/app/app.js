/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('gwPage', ['ngRoute', 'ngAnimate']);
app.controller('pageCtrl', ['$http', function ($http) {
        var ctrl = this;
        $http.get('gwpages.json').then(function (response) {
            ctrl.examples = response.data.examples;
        });
        $http.get('featured.json').then(function (response) {
            ctrl.featured = response.data.pages;
        });
        this.selTab = 1;
        this.isTab = function (n) {
            return n === ctrl.selTab;
        };
        this.setTab = function (n) {
            ctrl.selTab = n;
        };
        this.getKeys = function () {
            var ks = Object.keys(ctrl.examples[0]);
            return ks.slice(0, 9);
        };
    }]);
app.config(function ($routeProvider) {
    $routeProvider.when('/examples',
            {
                templateUrl: "examples.html",
            }).when('/home', {
        templateUrl: "home.html",
    }).when('/contact', {
        templateUrl: 'contact.html'
    }).when('/about', {
        templateUrl: 'about.html'
    }).otherwise({
        redirectTo: '/home'
    });
});