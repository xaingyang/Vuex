import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex )

const state={
    count:0,
}

const mutations={
    INCREMENT(){
       state.count++
    },
    DECREMENT(){
       state.count--
    }
}

const actions={
    increment(context){
       context.commit('INCREMENT')
    },
    decrement({commit}){
       commit('DECREMENT')
    },
    incrementOdd({commit,state}){
       if(state.count %2 === 0){
           commit('INCREMENT')
       }
    },
    incrementAsync({commit}){
       setTimeout(()=>{
           commit('INCREMENT')
       },1000)
    }
}

const getters={

}

export default new Vuex.Store({
    // state:{   }

    state,
    mutations,
    actions,
    getters
})