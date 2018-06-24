import Vue from 'vue'
import Router from 'vue-router'
import TimesheetHunters from '@/components/TimesheetHunters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TimesheetHunters',
      component: TimesheetHunters
    }
  ]
})
