import Vue from "vue";
import Router from "vue-router";
import Weather from "@/components/Weather.vue";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import Plants from "@/components/Plants.vue";
import Contact from "@/components/Contact.vue";
import Aboutus from "@/components/Aboutus.vue";
import Profile from "@/components/Profile.vue";
import read from "@/components/read.vue";
import Statics from "@/components/Statics.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [

    // {
    //   path: "/",
    //   name: "navbar",
    //   component: Navbar
    // },

    {
      path: "/weather",
      name: "weather",
      component: Weather
    },

    {
      path: "/login",
      name: "login",
      component: Login
    },

    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/aboutus",
      name: "aboutus",
      component: Aboutus
    },

    {
      path: "/read",
      name: "read",
      component: read
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },

    {
      path: "/plants",
      name: "plants",
      component: Plants
    },

    {
      path: "/profile",
      name: "profile",
      component: Profile
    },

    {
      path: "/statics",
      name: "statics",
      component: Statics
    }
   
  ]
});
