/* global $ */

appmodule.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  		$httpProvider.interceptors.push('APIInterceptor');
        $stateProvider	        
            .state('app.test-preview', {
                url:'test/preview/',
                views :{
                    'header@': {
                        controller  : 'TestPreviewHeaderController',
                        templateUrl : 'views/test_preview_header.html'
                    },
                    'content@': {
                        controller  : 'TestPreviewController',
                        templateUrl : 'views/test/test_preview.html'
                    },
                    'footer@': ''
                }
                })

			.state('app.test-login', {
				url:'test/login/',
				views :{
					'header@': {
						controller  : 'TestPreviewHeaderController',
						templateUrl : 'views/test/test_preview_header.html'
					},
					'content@': {
						controller  : 'UserDataController',
						templateUrl : 'views/test/user_data_form.html'
					},
					'footer@': ''
				}
				})
		// $locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
	});