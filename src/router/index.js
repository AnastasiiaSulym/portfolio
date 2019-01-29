import Vue from 'vue';
import VueRouter from 'vue-router';
import Archives from '../views/archives';
import  About from '../views/about';
import Home from '../views/home';
import Contact from '../views/contact';
import Portfolio from '../views/portfolio';



Vue.use(VueRouter);

export default new VueRouter({
    routes: [
       {
            path: '/archives',
           component: Archives,
           name: Archives
        },
        {
            path: '/about',
            component: About,
            name: About
        },
        {
            path: '/home',
            component: Home,
            name: Home
        },
        {
            path: '/contact',
            component: Contact,
            name: Contact
        },
        {
            path: '/portfolio',
            component: Portfolio,
            name: Portfolio
        },



    ]
})