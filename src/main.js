// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import {isWebview} from "../libs/utils"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(MintUI);

Vue.config.productionTip = false;

const store = new Vuex.Store({});

let history = {};
let historyCount = 0;

history['/'] = 0;

store.registerModule('app', {
    state: {
        direction: 'forward',
        historyCount: 0,
        isShowHeader: isWebview(),
        isSlideNavigation: false,
        title: 'World Cup'
    },
    mutations: {
        updateDirection(state, payload) {
            state.direction = payload.direction;
        },
        updateHistoryCount(state, payload) {
            state.historyCount = payload.historyCount;
        },
        setTitle(state, title) {
            if (state.title === title) {return}
            state.title = title;
            if (document) {
                document.title = title;
            }
        }
    }
});

router.beforeEach(function (to, from, next) {
    const toIndex = history[to.path];
    const fromIndex = history[from.path];

    if (toIndex) {
        if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
            store.commit('updateDirection', {direction: 'forward'});
        } else {
            store.commit('updateDirection', {direction: 'reverse'});
        }
    } else {
        ++historyCount;
        store.commit('updateHistoryCount', {historyCount: historyCount});

        if (to.path === '/') {
            store.commit('updateDirection', {direction: 'reverse'});
        } else {
            history[to.path] = historyCount;
            store.commit('updateDirection', {direction: 'forward'})
        }
    }

    next();
});

router.afterEach(function (to) {
    if (to.meta.title) {
        store.commit('setTitle', to.meta.title);
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
