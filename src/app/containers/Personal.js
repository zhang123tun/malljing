angular
  .module('app')
  .component('personal', {
    templateUrl: 'app/containers/Personal.html',
    controller: Personal
  });

function Personal() {
  this.navs = [{
    name: '我的关注',
    id: 0,
    active: false,
    enable: true,
    path: '/app/home/watchlist'
  },{
    name: '商场',
    id: 1,
    active: false,
    enable: true,
    path: '/app/mall/rtmonitor',
    children:[{
      name: '客流监控',
      id: 0,
      active: false,
      enable: true,
      path: '/app/mall/rtmonitor',
      children:[{
        name: '实时监控',
        id: 0,
        active: false,
        enable: true,
        path: '/app/mall/rtmonitor',
      },{
        name: '定制报表',
        id: 1,
        active: false,
        enable: true,
        path: '/app/mall/reportexport',
      }]
    },{
      name: '客流分析',
      id: 1,
      active: false,
      enable: true,
      path: '/app/mall/pfanalysis',
    }]
  },{
    name: '个人中心',
    id: 2,
    active: false,
    enable: true,
    path: '/app/personal/settings',
    children:[{
      name: '个人信息',
      id: 0,
      active: false,
      enable: true,
      path: '/app/personal/settings',
    },{
      name: '消息中心',
      id: 1,
      active: false,
      enable: true,
      path: '/app/personal/messages',
    },{
      name: '修改密码',
      id: 2,
      active: false,
      enable: true,
      path: '/app/personal/resetpwd',
    }]
  }];
  this.sideBarNavs = this.navs[2].children;
  this.userInfo = [userInfo];
  console.log('Personal');
}