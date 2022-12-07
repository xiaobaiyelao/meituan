import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:()=> import('../views/myHome/MyHome.vue')
        },
        {
            path:'/cart',
            component:()=> import('../views/myCart/MyCart.vue')
        },
        {
            path:'/order',
            component:()=> import('../views/myOrder/MyOrder.vue')
        },
        {
            path:'/mine',
            component:()=> import('../views/mine/Mine.vue')
        }
    ]
})

export default router