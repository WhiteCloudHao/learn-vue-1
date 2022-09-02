import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    user: {
    
      name: localStorage.getItem('id') || '',
      pass: localStorage.getItem('pass')||'',
    }
  },
 
  mutations: {
    signUp(state, payload) {
      state.user = {...state.user, ...payload}
      localStorage.setItem('id', state.user.name)
      console.log(typeof state.user.name)
      localStorage.setItem('pass', state.user.pass)
      router.push('login')
    },
    login(state, payload) {
      
      if((state.user.name === payload.name)  && (state.user.pass === payload.pass)) {
        router.push({name: 'homePage'})
      } else {
       alert("Invalid account") 
      }
     
    }
  },
  
  actions: {
    commitsignUp(context, payload) {
      context.commit('signUp', payload)
    },
    commitlogin({commit}, payload) {
      commit('login', payload)
    }
  
  },
})
export default store;

