/**
 * Created by asus on 2017/8/4.
 */
angular.module("myApp")//引用已存在的myApp模块
    .controller("LoginOutController",["$scope","$http","$rootScope","$state",function($scope,$http,$rootScope,$state){//为了防止压缩函数的参数
            $rootScope.loginUser=null;
            $state.go("home");
    }]);