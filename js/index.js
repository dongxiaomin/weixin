var a = angular.module('weixinapp',['ngAnimate','ngRoute']);
a.controller('indexCtrl',['$scope',function($scope){
    $scope.title="微信";
}])
a.controller('weixinCtrl',['$scope',function($scope){
  $scope.wxs = [
     {image:'./image/wx1.8.png',title:'订阅号',info:'山西农信：【今日头条】 临猗',data:'昨天',image2:'./image/wx1.6.png'},
     {image:'./image/wx1.3.png',title:'腾讯新闻',info:'白鹿原作者：陈忠实',data:'昨天',image2:'./image/wx1.6.png'},
     {image:'./image/wx1.5.png',title:'微信团队',info:'微信：欢迎再次来到微信',data:'昨天',image2:'./image/wx1.7.png'},
     {image:'./image/弗尔斯特.png',title:'弗尔斯特 盛大星际俱乐部',info:'风影：壹购物',data:'刚刚',image2:'./image/wx1.7.png'},
  ]
}])

// a.controller('tongxunluCtrl',['$scope',function($scope){
//    $scope.txls = [
//      {key:'B',
//       people:[
//        {image:'./image/a1.png',name:'暴老师'},
//        {image:'./image/a1.png',name:'BM'},
//      ]
//     },
//     {key:'C',
//       people:[
//        {image:'./image/a1.png',name:'小曹'},
//      ]
//     },
//    ]
// }])

a.controller('faxianCtrl',['$scope',function($scope){

}])
a.controller('woCtrl',['$scope',function($scope){

}])

a.directive('wxTitle',[function(){
	return {
		restrict:"E",
		templateUrl:"views/wx-title.html",
	}
}])
a.directive('wxFooter',[function(){
	return {
		restrict:"E",
		templateUrl:"views/wx-footer.html",
	}
}])

a.config(['$routeProvider',function($routeProvider){
      $routeProvider.when('/',{
        controller:'weixinCtrl',
        templateUrl:'views/weixin.html'
      }).when('/weixin',{
        controller:'weixinCtrl',
        templateUrl:'views/weixin.html'
      }).when('/tongxunlu',{
      	controller:'tongxunluCtrl',
      	templateUrl:'views/tongxunlu.html'
      }).when('/faxian',{
        controller:'faxianCtrl',
        templateUrl:'views/faxian.html'
      }).when('/wo',{
        controller:'woCtrl',
        templateUrl:'views/wo.html'
      }).otherwise({
          redirectTo:'/'
      });
}])