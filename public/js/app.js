// angualr的入口js文件
angular.module('shiba', ['ngRoute'])

// 配置路由
.config(['$routeProvider',function ($routeProvider) {
  
  // 仪表盘
  $routeProvider.when('/dashboard',{
    templateUrl: './views/index/dashboard.html',
    controller: 'dashboardController'
  })
  // 讲师列表
  $routeProvider.when('/teacher_list',{
    templateUrl: './views/teacher/teacher_list.html',
    controller:  'teacher_listController'
  })

  // 讲师添加
  $routeProvider.when('/teacher_add',{
    templateUrl: './views/teacher/teacher_add.html',
    controller: 'teacher_addController'
  })

}])
// 定义控制器dashboardController
.controller('dashboardController',['$scope',function ($scope) {
  // $scope.title = '仪表盘'
  document.title = '仪表盘'
}])

// 讲师列表控制器
.controller('teacher_listController',['$scope',function ($scope) {
  // $scope.title = '讲师列表'
  // 更改页面的title内容
  document.title = '讲师列表'
}])

// 讲师添加控制器
.controller('teacher_addController',['$log','$scope',function ($log,$scope) {
  document.title = '讲师添加!'
}])

// 这个是head里的控制器
.controller('mainController',['$scope',function ($scope) {
  $scope.title = '仪表盘'
}])


// ng-controller
// 依赖注入
// controller('ddd',function ($timeout) {
  
// })