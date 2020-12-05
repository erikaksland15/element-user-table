<template>
  <div class="users">
    <h2>My Users</h2>
    <div v-for="(user, index) in users" v-bind:key="index" class="currency">
      {{ user.name }}:
      <span >
        {{ user.username }} | {{ user.email }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  props: {
    users: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
