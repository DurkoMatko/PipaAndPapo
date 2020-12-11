import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
// import work from '@/components/work'
import footer from '@/components/bottomFooter'
// import projects from '@/components/projects'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      components: {
        main: home,
        footer: footer
      },
      meta: {
        bodyClass: 'home',
      }
    },
    // {
    //   path: '/work',
    //   name: 'My work',
    //   components: {
    //     main: work,
    //     footer: footer
    //   },
    //   meta: {
    //     bodyClass: 'work',
    //   }
    // },
    // {
    //   path: '/projects',
    //   name: 'My projects',
    //   components: {
    //     main: projects,
    //     footer: footer
    //   },
    //   meta: {
    //     bodyClass: 'project',
    //   }
    // },
    {
      path: '*',
      redirect: '/home'

    }
  ]
})
export default router
