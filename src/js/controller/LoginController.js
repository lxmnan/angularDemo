/**
 * Created by asus on 2017/8/4.
 */
/*
angular.module("myApp")//引用已存在的myApp模块
    .controller("LoginController",["$scope","$http",function($scope,$http){
        $scope.reg=function () {
            $http({
                url:"http://localhost:3000/user/login",
                method:"post",
                data:{
                    phone:$scope.phone,
                    password:$scope.password
                }
            }).then(function success(data){
                console.log(data);
            },function error(err){
                console.log(err);
            });
        };
    }]);

*/
angular.module("myApp")
    .controller('LoginController',['$scope','$http',"$state", "$rootScope", function ($scope,$http, $state, $rootScope) {
        $scope.login=function () {
            $http({
                url: "http://localhost:3000/user/login",
                method: 'post',
                data: {
                    phone: $scope.phone,
                    password: $scope.password
                }
            }).then(function success(data) {
                console.log(data);
                console.log(data.data.resultMsg);
                $scope.result_msg="";
                if(data.data.resultCode!="0000"){
                    $scope.result_msy=data.data.resultMsg;
                }else {
                    console.log("test");
                    $scope.result_msy="";
                   /* $rootScope.loginUser = data.config.data.phone;*/
                   console.log($rootScope.loginUser);
                    $rootScope.loginUser = data.data.result;
                    $state.go("home");
                }
            }, function error(err) {
                console.log(err);
            });
        }
    }]);