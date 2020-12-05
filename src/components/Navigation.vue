<template>
  <nav id="nav-links">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/users/" class="nav-link">User Table</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
  .nav-link {
    padding: 12px 16px;
    line-height: 16px;
    text-decoration: none;
    color: black;
  }
  .nav-link:hover {
    color: gray;
  }
</style>