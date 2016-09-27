angular.module('starter.controllers', [])

.controller('HomeCtrl', function ($scope, Posts) {
    $scope.posts = Posts.all();
})
.controller('LikeCtrl', function ($scope, Posts) {
    $scope.posts = Posts.all();
})


.controller('SearchesCtrl', function ($scope, Pictures) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.pictures = Pictures.all();

})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ProfileCtrl', function ($scope, Pictures) {
    $scope.pictures = Pictures.all();
})
.controller('CameraCtrl', function ($scope, Camera, Pictures) {

    $scope.takePicture = function (options) {
        
        var options = {
            quality: 75,
            targetWidth: 200,
            targetHeight: 200,
            sourceType: 1
        };

        Camera.getPicture(options).then(function (imageData) {
            $scope.picture = imageData;;
        }, function (err) {
            console.log(err);
        });
    };
    $scope.takePictureGallery = function (options) {

        var options = {
            quality: 75,
            targetWidth: 200,
            targetHeight: 200,
            sourceType: 0
        };

        Camera.getPicture(options).then(function (imageData) {
            $scope.picture = imageData;;
        }, function (err) {
            console.log(err);
        });
    };

});

