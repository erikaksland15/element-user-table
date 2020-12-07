<template>
  <div class="userTable">
    <el-table
      :data="tableData"
      stripe
      height="600"
      class="table">
      <el-table-column type="expand">
        <template slot-scope="props">
          <div class="details-container">
            <div>
              <p><b>Address:</b></p>
              <p>
                {{ props.row.address.street }} {{ props.row.address.suite }}<br>
                {{ props.row.address.city }}, {{ props.row.address.state }}<br>
                {{ props.row.address.zipcode }}<br>
                <br>
                lat, long:<br>
                {{ props.row.address.geo.lat }}, {{ props.row.address.geo.lng }}
              </p>
            </div>
            <div>
              <p><b>Company Info:</b></p>
              <p>
                <i>Name</i>: {{ props.row.company.name }}<br>
                <i>Business Description</i>: {{ props.row.company.bs }}<br>
                <i>Catch Phrase</i>: {{ props.row.company.catchPhrase }}
              </p>
            </div>
            <div>
              <p><b>Other Contact Info:</b></p>
              <p>
                <i>Phone</i>: {{ props.row.phone }}<br>
                <i>Website</i>: {{ props.row.website }}
              </p>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="username"
        label="Username"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="200">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email Address">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Actions"
        width="240">
        <template slot-scope="scope">
          <router-link :to="{ name: 'Add Edit User', params: { action: 'Edit', users: tableData, user: scope.row} }" class="btn-edit">
            <el-button type="primary" icon="el-icon-edit" round> Edit</el-button>
          </router-link>
          <el-button @click="deleteUser(scope)" type="danger" icon="el-icon-delete" round></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="additionalActions">
      <router-link :to="{ name: 'Add Edit User', params: { action: 'Add', users: tableData } }" class="btn-add" >
        <el-button type="success" round>Add User</el-button>
        </router-link>
    </div>
  </div>
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
  methods: {
    deleteUser(scope) {
      if (confirm('Are you sure you want to Delete this user?\n\nUsername: ' + scope.row.username + '\nEmail: ' + scope.row.email)) {
        // Delete the User from the Users Array
        var index = this.users.map(function(e) { return e.id; }).indexOf(scope.row.id);
        this.users.splice(index, 1);
        console.log('User ID ' + scope.row.id + ' Deleted');
      }
    }
  },
  watch: {
    // watch for changes in the users list
    users: function(newVal) {
      this.tableData = newVal;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .userTable {
    max-width: 1080px;
    margin: auto;
  }
  .table {
    width: 100%;
  }
  .additionalActions {
    margin-top: 20px;
  }
  .btn-edit {
    margin-right: 10px;
  }
  .btn-add {
    float: right;
  }
  .details-container {
    display: grid;
    grid-template-columns: .75fr 1.25fr 1fr;
  }
</style>
