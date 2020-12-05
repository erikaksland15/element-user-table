<template>
  <div class="users">
    <h2>My Users</h2>
    <UserTable :users="users"/>
  </div>
</template>

<script>
import UserTable from './UserTable.vue'

export default {
  name: 'Users',
  components: {
    UserTable
  },
  props: {
    users: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
