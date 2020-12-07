import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HelloWorld.vue";
import Users from "../components/Users.vue";
import AddEditUser from "../components/AddEditUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/users/",
    name: "Users",
    component: Users
  },
  {
    path: "/add-edit-user/",
    name: "Add Edit User",
    props: true,
    component: AddEditUser
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;