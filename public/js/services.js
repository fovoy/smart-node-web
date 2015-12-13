angular.module('starter.services', ['ngResource'])
    .factory('consumerService', ['$resource', function ($resource) {
        var sr = $resource('http://localhost:8809/smart/service/find/');
        var srall = $resource('http://localhost:8809/smart/service/findAll/');
        return {
            all: function () {
                var chats = srall.get({page: 0});
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                var ser = sr.get({id: chatId});
                return ser;
            }
        };
    }])
    .factory('sendOrder', ['$resource', function ($resource) {
        var sender = $resource('http://localhost/smart/orders/sendOrder/');
        return {
            send: function (contact) {
                console.log(contact);
                sender.save(contact, function (res) {
                    console.log(res);
                });
            }
        };
    }])
    .factory('product', ['$resource', function ($resource) {
        var pid = $resource('http://localhost:8809/smart/product/findById/');
        var pall = $resource('http://localhost:8809/smart/product/findAll/');
        return {
            all: function () {
                var chats = pall.get({page: 0});
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (id) {
                var ser = pid.get({id: id});
                return ser;
            }
        };
    }])
