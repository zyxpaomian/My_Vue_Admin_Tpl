import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 固定的路由表
export const fixedRouter = [
  {
    path: '/login',
    component: resolve => require(['../components/login.vue'], resolve),
    hidden: true
  },
  {
    path: '',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [{
      path: 'index',
      component: resolve => require(['../views/index.vue'], resolve),
      meta: {
        title: 'Dashboard',
        roles: ['user', 'admin'],
        icon: 'el-icon-view'
      }
    }]
  },
]

// 需要权限判断展示的路由
export const permissionRouter = [
  {
  path: "/setting",
  component: resolve => require(['../components/home.vue'], resolve),
  name: "设置",
  meta: {
    title: "设置",
    icon: "el-icon-s-tools",
    roles: ['admin']
  },
  // 二级菜单写法
  children: [{
      path: "usermgt",
      name: "用户管理",
      component: resolve => require(['../views/setting/usermgt.vue'], resolve),
      meta: {
        title: "用户管理",
        icon: "el-icon-user",
        roles: ['admin']
      }
    },
    {
      path: "schedule",
      name: "计划任务配置",
      component: resolve => require(['../views/setting/schedule.vue'], resolve),
      meta: {
        title: "计划任务配置",
        icon: "el-icon-date",
        roles: ['admin']
      }
    }
  ]
},
{
  path: "/server",
  component: resolve => require(['../components/home.vue'], resolve),
  name: "服务器管理",
  meta: {
    title: "服务器管理",
    icon: "el-icon-monitor",
    roles: ['admin','sa_user']
  },
  // 二级菜单写法
  children: [{
      path: "servermgt1",
      name: "服务器子项1",
      component: resolve => require(['../views/server/server1.vue'], resolve),
      meta: {
        title: "服务器子项1",
        icon: "el-icon-monitor",
        roles: ['admin','sa_user']
      }
    },
    {
      path: "servermgt2",
      name: "服务器子项2",
      component: resolve => require(['../views/server/server2.vue'], resolve),
      meta: {
        title: "服务器子项2",
        icon: "el-icon-monitor",
        roles: ['admin','sa_user']
      }
    }
  ]
},
{
  path: "/storage",
  component: resolve => require(['../components/home.vue'], resolve),
  name: "存储管理",
  meta: {
    title: "存储管理",
    icon: "el-icon-coin",
    roles: ['admin','sa_user']
  },
  // 二级菜单写法
  children: [{
      path: "storage1",
      name: "存储子项1",
      component: resolve => require(['../views/storage/storage1.vue'], resolve),
      meta: {
        title: "存储子项1",
        icon: "el-icon-coin",
        roles: ['admin','sa_user']
      }
    },
    {
      path: "storage2",
      name: "存储子项2",
      component: resolve => require(['../views/storage/storage2.vue'], resolve),
      meta: {
        title: "存储子项2",
        icon: "el-icon-coin",
        roles: ['admin','sa_user']
      }
    }
  ]
}
]

export default new Router({
  routes: fixedRouter

})
