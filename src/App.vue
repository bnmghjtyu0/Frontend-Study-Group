<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <div class="main ml-3">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './container/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
