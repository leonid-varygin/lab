import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import {ServerTable, ClientTable, Event} from 'vue-tables-3'
import './style.scss'

createApp(App)
    .use(store)
    .use(router)
    // .use(ServerTable, [options = {}], [useVuex = false], [theme = 'bootstrap3'], [template = 'default'])
    .mount('#app')
