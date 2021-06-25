import Vue from "vue";
import VueRouter from "vue-router";
import Mercadorias from "../views/Mercadorias.vue";
import Vendas from "../views/Vendas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Mercadorias",
    component: Mercadorias,
  },
  {
    path: "/Vendas",
    name: "Vendas",
    component: Vendas,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
