import home from "./components/home.vue";
import contact from "./components/contact.vue";
import userdata from "./components/userdata.vue";
import userstart from "./components/userstart.vue";
import userdetail from "./components/userdetail.vue";
import useredit from "./components/useredit.vue";
export default [
  {
    path: "/",
    component: home,
  },
  {
    path: "/contact",
    component: contact,
  },
  {
    path: "/userdata",
    component: userdata,
    children: [
      { path: "", component: userstart },
      { path: ":id", component: userdetail },
      { path: ":id/edit", component: useredit },
    ],
  },
];
