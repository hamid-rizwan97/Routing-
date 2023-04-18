<template>
    <div>
    <p>Some User detail</p>
    <p> User Loaded with ID : {{ $route.params.id }}</p>
    <router-link tag="button" :to="'/userdata/' + $route.params.id + '/edit/'"> EDIT</router-link>
</div>
</template>
<script>
</script>