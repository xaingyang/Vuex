import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    count:0
}

const mutations={
    INCREMENT(){
        state.count++
    },
}

const actions={
    increment({commit}){
        commit('INCREMENT')
    },
    incrementOdd({commit}){
        commit('INCREMENT')
    }
}

const getters={}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
