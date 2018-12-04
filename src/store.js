import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const enhanceAccessToeken = () => {
//     const {accessToken} = localStorage
//     if (!accessToken) return
//     axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
//   }
//   enhanceAccessToeken()

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {
    isAuthenticated: state => {
        return state.accessToken
      }
  },
  mutations: {
    LOGIN (state, data) {
    console.log(data.token)
      state.accessToken = data.token
      localStorage.accessToken = data.token
    },
    LOGOUT (state) {
      state.accessToken = null
    }
  },
  actions: {
    LOGIN ({commit}, {email, password}) {
      return axios.post('http://192.168.0.56:8002/v1/auth/login', {'email': email, 'password': password})
        .then(({data}) => {
             commit('LOGIN', data)
        })
    },
    LOGOUT ({commit}) {
      commit('LOGOUT')
    },
  },
})