import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
