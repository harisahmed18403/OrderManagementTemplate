import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import OrdersView from '../views/OrdersView.vue'
import SettingsView from '../views/SettingsView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/orders', component: OrdersView },
    { path: '/settings', component: SettingsView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router