<template>
  <div class="users">
    <h2>My Users</h2>
    <div v-for="user in users" v-bind:key="user.key" class="currency">
      {{ user.name }}:
      <span >
        {{ user.username | user.email }}
      </span>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;
const url = "https://jsonplaceholder.typicode.com/users";

export default {
  name: 'Users',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get(url).then(response => {
      this.users = response.data
      console.log(this.users);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
