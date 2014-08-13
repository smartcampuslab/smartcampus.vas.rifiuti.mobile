// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'google-maps'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.home', {
        url: "/home",
        views: {
            'menuContent': {
                templateUrl: "templates/home.html",
                controller: 'HomeCtrl'
            }
        }
    })

    .state('app.puntiDiRaccolta', {
        url: "/puntiDiRaccolta",
        views: {
            'menuContent': {
                templateUrl: "templates/puntiDiRaccolta.html",
                controller: 'PDRCtrl'
            }
        }
    })

    .state('app.tipiDiRaccolta', {
        url: "/tipiDiRaccolta",
        views: {
            'menuContent': {
                templateUrl: "templates/tipiDiRaccolta.html",
                controller: 'TDRCtrl'
            }
        }
    })

	.state('app.raccolta', {
        url: "/raccolta/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/raccolta.html",
                controller: 'RaccoltaCtrl'
            }
        }
    })

	.state('app.rifiuto', {
        url: "/rifiuto/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/rifiuto.html",
                controller: 'RifiutoCtrl'
            }
        }
    })

	.state('app.puntoDiRaccolta', {
        url: "/puntoDiRaccolta/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/puntoDiRaccolta.html",
                controller: 'PuntoDiRaccoltaCtrl'
            }
        }
    })

    .state('app.profili', {
        url: "/profili",
        views: {
            'menuContent': {
                templateUrl: "templates/profili.html",
                controller: 'ProfiliCtrl'
            }
        }
    })

	.state('app.aggProfilo', {
        url: "/aggProfilo",
        views: {
            'menuContent': {
                templateUrl: "templates/aggProfilo.html",
                controller: 'AggiungiProfiloCtrl'
            }
        }
    })

	.state('app.modificaProfilo', {
        url: "/modificaProfilo/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/modificaProfilo.html",
                controller: 'ModificaProfiloCtrl'
            }
        }
    })

    .state('app.segnala', {
        url: "/segnala",
        views: {
            'menuContent': {
                templateUrl: "templates/segnala.html",
                controller: 'SegnalaCtrl'
            }
        }
    })

    .state('app.contatti', {
        url: "/contatti",
        views: {
            'menuContent': {
                templateUrl: "templates/contatti.html",
                controller: 'ContattiCtrl'
            }
        }
    })

    .state('app.info', {
        url: "/info",
        views: {
            'menuContent': {
                templateUrl: "templates/info.html",
                controller: 'InfoCtrl'
            }
        }
    });
    $urlRouterProvider.otherwise('/app/home');
});
