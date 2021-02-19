import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Help",
    component: () => import(/* webpackChunkName: "Help" */ "../views/Help.vue")
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import(/* webpackChunkName: "slide" */ "../views/Editor.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
