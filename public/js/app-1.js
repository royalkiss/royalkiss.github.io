angular.module('shiba',['ngRoute'])
// 配置路由  通过锚点设置，让分离的页面内容，不跳转显示在同一页面上去
.config('$scopeProvider',function($routeProvider){
	// 仪表盘部分------
   $routeProvider.when('/dashboard',{
   	// /dashboard是锚点#!后面的内容
   	// templateUrl是当锚点值为/dashboard时，就去找
   	//dashboard.html页面，并不跳转显示在同一页面上
      templateUrl:'./views/index/dashboard.html',
      controller:'dashboardController'

   })
    // 讲师列表部分---------
   $routeProvider.when('/teacher_list',{
   	templateUrl:'./views/teacher/teacher_list/html',
   	controller:'teacher_listController'
   })

    // 讲师添加部分--------
    $routeProvider.when('/teacher_add',{
    	templateUrl:'./views/teacher/teacher_add.html',
      controller:'teacher_addController'
    })

})
.controller('dashboardController',['$scope'],function($scope){
    document.title='仪表盘';
})
.controller('teacher_listController',['$scope'],function($scope){
    document.title='讲师列表';
})
.controller('teacher_addController',['$scope'],function($scope){
    document.title='讲师添加';
})
