import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    intensities: [],
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};

    },
    SET_INTENSITIES(state, intensities) {
        state.intensities = intensities;
    }
  },
  actions: {},
  modules: {},
});
