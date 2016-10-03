angular.module('starter.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})
.factory('Profile', function () {
    var Profile = {
        name: 'Brandon Nguyen',
        face: 'img/profile.jpg',
    }

    return {
        getProfile: function () {
            return Profile;
        }
    }
})
.factory('Posts', function () {

    

    var posts = [{
       
        name: 'Ben Sparrow',
        comment: 'Check this out',
        face: 'img/ben.png',
        pic: 'img/wall1.jpg'
    }, {
       
        name: 'Max Lynx',
        comment: 'Some cool shit',
        face: 'img/max.png',
        pic: 'img/wall2.jpg'
    }, {
        
        name: 'Adam Bradleyson',
        comment: 'Nice road',
        face: 'img/adam.jpg',
        pic: 'img/wall3.jpg'
    }, {
        name: 'Perry Governor',
        comment: 'WOW!',
        face: 'img/perry.png',
        pic: 'img/wall4.jpg'
    }];
    return {
        all: function () {
            return posts;
        },
        addPost: function (profile, comment,image) {
            posts.unshift({
             
                name: profile.name,
                comment: comment,
                face: profile.face,
                pic: image
            });
        },
    };
})
.factory('Pictures', function () {
    var pictures = ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg', 'img/pic5.jpg', 'img/pic6.png', 'img/pic7.jpg', 'img/pic8.jpg', 'img/pic9.jpg'];
    return {
        all: function () {
            return pictures;
        },
        addImg: function (image) {
            pictures.unshift(image);
        }
    };
})
.factory('Camera', function ($q) {

    return {
        getPicture: function (options) {
            var q = $q.defer();

            navigator.camera.getPicture(function (result) {
                q.resolve(result);
            }, function (err) {
                q.reject(err);
            }, options);

            return q.promise;
        }
    }

});