import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShown: false,

    },
    mutations: {
        increment(state) {
            state.isShown = !state.isShown
        }
    }
})