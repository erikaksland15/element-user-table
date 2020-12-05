<template>
  <div id="app">
    <Navigation/>
    <router-view :users="users" @users="users = $event"></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

const axios = require('axios').default;
const url = "https://jsonplaceholder.typicode.com/users";

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get(url).then(response => {
      this.users = response.data
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
