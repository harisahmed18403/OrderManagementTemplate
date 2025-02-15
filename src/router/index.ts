import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import OrdersView from '../views/OrdersView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/orders', component: OrdersView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router