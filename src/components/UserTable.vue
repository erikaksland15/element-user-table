<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      prop="username"
      label="Username"
      width="240">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="240">
    </el-table-column>
    <el-table-column
      prop="email"
      label="Email Address">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'UserTable',
  props: {
    users: Array
  },
  data() {
    return {
      tableData: this.users
    }
  },
  watch: { 
    users: function(newVal) { // watch it
      this.tableData = newVal;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
