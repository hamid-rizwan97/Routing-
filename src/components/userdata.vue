<template>
  <div class="parent-user">
    <h3>User Selection Page</h3>
    <button @click="movehome()">Back Home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    movehome() {
      this.$router.push("/");
    },
  },
};
</script>
