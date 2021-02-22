import store from '../index'

export default {
  namespaced: true,
  state() {
    return {
      sievesArr : []
    }
  },
  mutations: {
    setSieves(state: { sievesArr: number[]; }, sieves:number) {
      state.sievesArr.push(sieves)
      console.log(state.sievesArr)
    }
  },
  actions: {
    async create({commit, dispatch}:any, sieves:number) {
      try {
        commit('setSieves', sieves)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    sieves(state:any) {
      return state.sievesArr
    }
  }
}