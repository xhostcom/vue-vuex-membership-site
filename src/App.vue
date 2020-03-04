<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#nav a {
  font-weight: bold;
  color: rgb(209, 62, 153);
}
#app
  > div
  > div.container.page
  > div
  > div.col-md-9
  > div.feed-toggle
  > ul
  > li:nth-child
  > a
  #nav,
a.router-link-exact-active {
  color: rgb(209, 62, 153);
}
#app > nav > div > a > img {
  padding-top: 6px;
}
#app
  > div
  > div.container.page
  > div
  > div.col-md-9
  > div.feed-toggle
  > ul
  > li:nth-child(2)
  > a {
  color: rgb(209, 62, 153);
}
</style>
