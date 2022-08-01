import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router';

import generatedRoutes from 'virtual:generated-pages';

import App from './App.vue';

import 'virtual:windi.css';
import 'virtual:svg-icons-register';

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
