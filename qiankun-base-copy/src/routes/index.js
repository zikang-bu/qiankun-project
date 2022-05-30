import Home from "../pages/home/index.vue";
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        key: "VueMicroApp",
        title: "Vue 主页",
        path: "/vue",
    },
    {
        key: "VueMicroAppList",
        title: "Vue 列表",
        path: "/vue/list",
    },
];

export default new VueRouter({
    mode: "history",
    routes,
});