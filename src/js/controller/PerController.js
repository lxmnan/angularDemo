/**
 * Created by asus on 2017/8/8.
 */
angular.module("myApp")//引用已存在的myApp模块
    .controller("PerController",["$scope","$http", "$state", "$rootScope",function($scope,$http, $state, $rootScope){//为了防止压缩函数的参数
            console.log($rootScope.loginUser.phone);
            console.log("*******");
            $http({
                url: "http://localhost:3000/user/info",
                method: 'post',
                data: {
                    phone: $rootScope.loginUser.phone
                }
            }).then(function success(data) {
                console.log(data);
                console.log(data);
                $scope.user = data.data.result;
            }, function error(err) {
                console.log(err);
            });

    }]);

