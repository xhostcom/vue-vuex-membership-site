<template>
<div id="app">
<Navbar />
<router-view />
</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
components: {
Navbar
}
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
