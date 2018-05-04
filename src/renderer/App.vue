<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<script>
  import layout from './layout/index.vue'
  export default {
    components: {layout}
  }
</script>

<style>
  /* CSS */
  body, html {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
</style>
