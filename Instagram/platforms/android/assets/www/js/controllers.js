angular.module('starter.controllers', [])

.controller('HomeCtrl', function ($scope, Posts) {
    $scope.posts = Posts.all();
    $scope.like = true;
    

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



.controller('ProfileCtrl', function ($scope, Pictures, Profile, Posts, Camera) {
    $scope.profile = Profile.getProfile();
    $scope.pictures = Pictures.all();
    $scope.posts = Posts.all();
    $scope.like = true;
    $scope.toggleLike = function () {
        $scope.like = $scope.like === false ? true : false;
    };
})
.controller('CameraCtrl', function ($scope, Camera, Pictures, Posts, Profile, $state) {
    $scope.image = null;

    $scope.data = {};

    $scope.submit = function () {
        Posts.addPost(Profile.getProfile(), $scope.data.comment, $scope.image);
        $scope.image = null;
        $scope.data = {};
        $state.go('tab.home');
    };

    $scope.takePicture = function (options) {
        
        var options = {
            quality: 75,
            targetWidth: 200,
            targetHeight: 200,
            destinationType:1,
            sourceType: 1
        };

        Camera.getPicture(options).then(function (imageData) {
            $scope.image = imageData;
            Pictures.addImg($scope.image);
        }, function (err) {
            console.log(err);
        });
    };
    $scope.takePictureGallery = function (options) {

        var options = {
            quality: 75,
            targetWidth: 200,
            targetHeight: 200,
            destinationType: 1,
            sourceType: 0
        };

        Camera.getPicture(options).then(function (imageData) {
            $scope.image = imageData;
            Pictures.addImg($scope.image);
        }, function (err) {
           console.log(err);
        });
    };

});

