import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bible-list",
      name: "BibleList",
      component: () => import("../components/BibleList.vue"),
    },
    {
      path: "/chapter/:bibleId/:chapterId",
      name: "BookChapter",
      component: () => import("../components/BookChapter.vue"),
    },
    {
      path: "/bible/:id",
      name: "Bible",
      component: () => import("../components/Bible.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
