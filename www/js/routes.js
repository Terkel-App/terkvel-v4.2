angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider






    .state('login', {
      url: '/logintype',
      templateUrl: 'templates/login.html'
    })





    .state('loginStudent', {
      url: '/loginstudent',
      templateUrl: 'templates/loginStudent.html'
    })





    .state('loginLRer', {
      url: '/loginteacher',
      templateUrl: 'templates/loginLRer.html'
    })









    .state('tabselev.ukeplan', {
      url: '/ukeplan',
      views: {
        'tab12': {
          templateUrl: 'templates/ukeplan.html'
        }
      }
    })





    .state('tabselev.lekseplan', {
      url: '/lekseplan',
      views: {
        'tab13': {
          templateUrl: 'templates/lekseplan.html'
        }
      }
    })




    .state('tabselev', {
      url: '/elevtabs',
      abstract:true,
      templateUrl: 'templates/tabselev.html'
    })




    .state('tabselev.sykmelding', {
      url: '/sykmelding',
      views: {
        'tab5': {
          templateUrl: 'templates/sykmelding.html'
        }
      }
    })





    .state('tabsteacher.dashbord2', {
      url: '/dashbordteacher',
      views: {
        'tab6': {
          templateUrl: 'templates/dashbord2.html',
          abstract: true
        }
      }
    })



    .state('tabselev.dashbord3', {
      url: '/dashbordelev',
      views: {
        'tab5': {
          templateUrl: 'templates/dashbord3.html'
        }
      }
    })




    .state('tabsteacher.lekserPMinnelse', {
      url: '/lekserPMinnelse',
      views: {
        'tab6': {
          templateUrl: 'templates/lekserPMinnelse.html'
        }
      }
    })


    .state('tabsteacher.sos', {
      url: '/sos',
      views: {
        'tab6': {
          templateUrl: 'templates/sos.html'
        }
      }
    })

    .state('tabsteacher.innboks', {
      url: '/innboks',
      views: {
        'tab7': {
          templateUrl: 'templates/innboks.html'
        }
      }
    })





    .state('tabsteacher.mineKlasser', {
      url: '/mineklasser',
      views: {
        'tab8': {
          templateUrl: 'templates/mineKlasser.html'
        }
      }
    })




    .state('tabsteacher', {
      url: '/teachertabs',
      abstract:true,
      templateUrl: 'templates/tabsteacher.html'
    })






    ;

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/logintype');




});
