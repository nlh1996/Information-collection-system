import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import collect from './collect.js'

export default new vuex.Store({
    modules: {
      collect: collect,
    }
})