<template>
  <div class="app-parent">
  <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/home.vue'
import contact from './components/contact.vue'
import header from './components/header.vue'
import userdata from './components/userdata.vue'
import userstart from './components/userstart.vue'
import useredit from './components/useredit.vue'
import userdetail from './components/userdetail.vue'
export default {
  name: 'App',
  components: {
    'home':home,
    'contact':contact,
    'app-header':header,
    'userdata':userdata,
    'userstart':userstart,
    'userdetail':userdetail,
    'useredit':useredit
  }
}
</script>

<style>
</style>
