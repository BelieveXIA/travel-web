import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // 没有异步操作，可以省略actions步骤
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
