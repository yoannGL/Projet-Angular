
var myApp=angular.module('myApp',['ngRoute']);

/****** Configuration des routes angularjs ******/

myApp.config(function($routeProvider) {
    

      $routeProvider
        .when('/list', {
          templateUrl: 'template/list.html',controller:'list'
        })
        .when('/list/:filmId', {
          templateUrl: 'template/details.html',controller:'details'
        })
        .when('/add', {
          templateUrl:'template/add.html',controller:'add'
        })
        .when('/edit', {
          templateUrl:'template/edit.html',controller:'edit'
        })
        .otherwise('/list');
    }
  );


/****** Controller pour la page 'List' qui permet l'affichage de la liste de film ******/
myApp.controller('list', ['$scope','$http', function list( $scope, $http){

/****** Récupère les datas du fichier JavaScript/listeFilms.json et les stocks dans "mesFilms". ******/
 $http.get("JavaScript/listeFilms.json")
 .then(function mySucces(response) {
        $scope.mesFilms = response.data;
    }
    );

}]);

/***** Controller pour la page 'Details' qui permet d'afficher les détails de chaque film *****/
myApp.controller('details', ['$scope','$http', '$routeParams', function details( $scope, $http, $routeParams){

/***** Récupère les data du fichier correspondants aux paramètres 'filmId' de l'url dans mon dossier 'films' *****/
$http.get("JavaScript/films/"+ $routeParams.filmId +".json")
 .then(function mySucces(response) {
        $scope.film = response.data;    
    }
    );

}]);

myApp.controller('add', ['$scope','$http', function add( $scope, $http){

 
     

}]);



