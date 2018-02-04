import Vue from 'vue'
import Router from 'vue-router'
var viewbox = ()=> import('@/components/viewbox');
var basic1 = ()=> import('@/components/basic/index');
var basic2 = ()=> import('@/components/basic/basic2')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '调试页面',
      component: viewbox,
      redirect:'/basic1'
    },
    {
      path: '/basic1',
      name: '基本组件',
      component: basic1
    },
    {
      path: '/basic2',
      name: '基本组件',
      component: basic2
    }
  ]
})
