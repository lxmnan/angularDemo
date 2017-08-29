/**
 * Created by asus on 2017/8/4.
 */
angular.module("myApp")//引用已存在的myApp模块
    .controller("HomeController",["$scope","$http",function($scope,$http){//为了防止压缩函数的参数
            $scope.slides=[];
            $scope.hot=[];
            $scope.new=[];
            $scope.unit=[];
            $http.get("http://localhost:3000/IndexInfo").then(function success(data){
                console.log(data);
                $scope.slides=data.data.result.slides;
                $scope.hot=data.data.result.hot;
                $scope.new=data.data.result.new;
                $scope.unit=data.data.result.unit;

            },function error(err){
                console.log(err);
            });
    }]);