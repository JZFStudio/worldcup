import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
import World from './components/World'

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Home'
        },
        component: Home
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        meta: {
            title: 'Hellow World'
        },
        component: HelloWorld
    },
    {
        path: '/hello/world',
        name: 'World',
        component: World,
        meta: {
            title: 'World'
        }
    }
];

export default new Router({
    mode: 'history',
    routes
});
