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
export default {
  name: 'App',
  components: {
    'home':home,
    'contact':contact,
    'app-header':header,
    'userdata':userdata
  }
}
</script>

<style>
</style>
