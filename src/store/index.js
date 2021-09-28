import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: [],
    job: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
  },
  actions: {
    async setProfile({ commit }, id) {
      const fetchProfile = await axios
        .get(`http://localhost:8080/api/bios/${id}`)
        .then((response) => response.data)
        .catch((error) => error);
      commit('setProfile', fetchProfile);
    },
    async setJob({ commit }, id) {
      const fetchJob = await axios
        .get(`http://localhost:8080/api/bios/${id}`)
        .then((response) => response.data)
        .catch((error) => error);
      commit('setProfile', fetchJob);
    },
  },
  modules: {},
  getters: {
    getProfile: (state) => state.profile,
    getJob: (state) => state.job,
  },
});
