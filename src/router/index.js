import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/login/Login';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
    ],
});
