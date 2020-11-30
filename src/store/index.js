import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import mutations from './mutations'
import action from './actions'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  action,
  plugins: [createPersistedState()]
})
