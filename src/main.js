import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 忽略：项目提示
Vue.config.productionTip = false

// 配置ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* // 配置全局默认样式&图标（@代表src目录

import '@/assets/font/iconfont.css'*/
import '@/assets/css/reset.scss'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')