/**
 * Created by Administrator on 2017/8/8.
 */
/*angular.module("myApp") //引用已存在的myApp模块
 .controller("ListController",["$scope","$http",function ($scope,$http) {
 $scope.arr = ["全部", "微电影", "电影", "电视剧","戏曲","话剧","书画","相声","戏剧","音乐剧","其他"];
 $scope.lis=[];
 //$scope.name=[];
 $http.get("http://localhost:3000/IndexInfo").then(function success(data) {
 // console.log(data);
 //$scope.names=data.data.result.pattern;
 $scope.lis=data.data.result.listpage;
 console.log($scope.lis);

 },function error(err) {
 console.log(err);
 });

 $scope.clicktype=function (isOk){
 console.log("...."+isOk);
 $scope.orderna=isOk;
 // console.log(isOk);
 }
 }]);*/


/**
 * Created by Administrator on 2017/8/8.
 */
angular.module("myApp")
    .controller("ListController", ["$http", "$scope", function($http, $scope){
        $scope.arr = [];
        $scope.arrtype = ["全部", "微电影", "电影", "电视剧","戏曲","话剧","书画","相声","戏剧","音乐剧","其他"];
        $scope.changePage = function(p){
            $scope.page = p;
            // console.log($scope.page);
            $scope.getListData();
        };

        var obj = {
            init: function(){
                $scope.cid = 0;
                $scope.staus = 0;
                $scope.page = 1;
                $scope.count = 9;

                $scope.getListData();
            }
        };

        $scope.getListData = function(){
            $http({
                url: "http://localhost:3000/prolist",
                method: "get",
                params: {
                    cid: $scope.cid,
                    status: $scope.staus,
                    page: $scope.page,
                    count: $scope.count
                }
            }).then(function(data){
                console.log(data);
                var pageCount = Math.ceil(data.data.result.countAll / data.data.result.count);
                for(var i = 0; i < pageCount; i++){
                    $scope.arr.push(i+1);
                }
                //console.log(pageCount);
                $scope.listData = data.data.result.list;
            }, function(err){
                console.log(err);
            });
        };
        $scope.clicktype=function (isOk){
            console.log("...."+isOk);
            $scope.orderna=isOk;
            // console.log(isOk);
        }
        //初始先加载第1页数据
        obj.init();
    }]);



/*2017-8-8老师讲终点****************************************************************************************************/
/**
 * Created by Administrator on 2017/8/8.
 */
/*
angular.module("myApp")
    .controller("ListController", ["$http", "$scope", function($http, $scope){
        $scope.arr = [];


        $scope.changePage = function(p){
            $scope.page = p;
            // console.log($scope.page);
            $scope.getListData();
        };

        var obj = {
            init: function(){
                $scope.cid = 0;
                $scope.staus = 0;
                $scope.page = 1;
                $scope.count = 9;

                $scope.getListData();
            }
        };

        $scope.getListData = function(){
            $http({
                url: "http://localhost:3000/prolist",
                method: "get",
                params: {
                    cid: $scope.cid,
                    status: $scope.staus,
                    page: $scope.page,
                    count: $scope.count
                }
            }).then(function(data){
                console.log(data);
                var pageCount = Math.ceil(data.data.result.countAll / data.data.result.count);
                for(var i = 0; i < pageCount; i++){
                    $scope.arr.push(i+1);
                }
                console.log(pageCount);
                $scope.listData = data.data.result.list;
            }, function(err){
                console.log(err);
            });
        };

        //初始先加载第1页数据
        obj.init();
    }]);*/
