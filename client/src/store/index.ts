import {createLogger, createStore} from 'vuex'
import generateSieves from "@/store/modules/generateSieves";

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  state() {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    generateSieves
  }
})
