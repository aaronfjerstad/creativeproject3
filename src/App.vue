<template>
  <div id="app">
    <div class="layout">
      <app-header class="header"></app-header>
      <router-view class="view"/>
      <app-footer class="footer"></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  grid-area: header;
  /* height: 2rem; */
}
.view {
  grid-area: view;
  height: 100%;
}
.footer {
  grid-area: footer;
  height: 2rem;
  z-index: 200;
}
.layout {
  display: grid;
  grid-template-areas: "header" "view" "footer";
}
</style>
