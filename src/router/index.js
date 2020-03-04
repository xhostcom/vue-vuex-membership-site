/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Settings from "../views/Settings.vue";
import ArticleCreate from "../views/ArticleCreate.vue";
import ArticleEdit from "../views/ArticleEdit.vue";
import Article from "../views/Article.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    // eslint-disable-next-line prettier/prettier
    component: () => import( "@/views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    // eslint-disable-next-line prettier/prettier
    component: () => import( "@/views/Register.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    // eslint-disable-next-line prettier/prettier
    component: () => import( "@/views/Settings.vue")
  },
  {
    path: "/editor",
    name: "editor_new",
    // eslint-disable-next-line prettier/prettier
    component: () => import( "@/views/ArticleCreate.vue")
  },
  {
    path: "/editor/:article_slug",
    name: "editor_edit",
    // eslint-disable-next-line prettier/prettier
    component: () => import( "@/views/ArticleEdit.vue")
  },
  {
    path: "/article/:article_slug",
    name: "article",
    // eslint-disable-next-line prettier/prettier
    component: () => import( "@/views/Article.vue")
  },
  {
    path: "/user_name",
    name: "profile",
    // eslint-disable-next-line prettier/prettier
    component: () => import( "@/views/Profile.vue")
  }
];
const router = new VueRouter({
  routes
});
export default router;
