import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// import './style.css'
import "./index.css";
import App from "./App.vue";
import UserProfile from "./components/UserProfile.vue";
import About from "./components/About.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: UserProfile },
		{ path: "/about", component: About },
	],
});

createApp(App).use(router).mount("#app");

export default router;
