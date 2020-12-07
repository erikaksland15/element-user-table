<template>
  <div class="addEditUser">
    <h2 v-if="action === 'Edit'">Edit User</h2>
    <h2 v-else>Add User</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Username" prop="username" required>
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <div class="split-container">
        <el-form-item label="Name" prop="name" required>
          <el-input v-model="ruleForm.name" style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email" required>
          <el-input v-model="ruleForm.email" style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input v-model="ruleForm.phone" style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="Website" prop="website">
          <el-input v-model="ruleForm.website" style="width: 100%;"></el-input>
        </el-form-item>
      </div>
      <h3>Address</h3>
      <el-form-item label="Street" prop="address_street" required>
        <el-input v-model="ruleForm.address_street"></el-input>
      </el-form-item>
      <el-form-item label="Suite" prop="address_suite" required>
        <el-input v-model="ruleForm.address_suite"></el-input>
      </el-form-item>
      <div class="split-container">
        <el-form-item label="City" prop="address_city" required>
          <el-input v-model="ruleForm.address_city" style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="State" prop="address_state" required>
          <el-input v-model="ruleForm.address_state" style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="Zip Code" prop="address_zipcode" required>
          <el-input v-model="ruleForm.address_zipcode"></el-input>
        </el-form-item>
      </div>
      <div class="split-container">
        <el-form-item label="Latitude" prop="address_geo_lat">
          <el-input v-model="ruleForm.address_geo_lat" style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="Longitude" prop="address_geo_lng">
          <el-input v-model="ruleForm.address_geo_lng" style="width: 100%;"></el-input>
        </el-form-item>
      </div>
      <h3>Company Information</h3>
      <div class="split-container">
        <el-form-item label="Name" prop="company_name" required>
          <el-input v-model="ruleForm.company_name"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="Business Desc." prop="company_bs" required>
        <el-input v-model="ruleForm.company_bs"></el-input>
      </el-form-item>
      <el-form-item label="Catch Phrase" prop="company_catchPhrase">
        <el-input v-model="ruleForm.company_catchPhrase"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('ruleForm')" type="primary" round>Save User</el-button>
        <el-button @click="$router.go(-1)" round>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AddEditUser',
  props: {
    action: String,
    users: Array,
    user: Object
  },
  data() {
    return {
      ruleForm: {
        username: ((this.user !== undefined) ? this.user.username : ''),
        name: ((this.user !== undefined) ? this.user.name : ''),
        email: ((this.user !== undefined) ? this.user.email : ''),
        phone: ((this.user !== undefined) ? this.user.phone : ''),
        website: ((this.user !== undefined) ? this.user.website : ''),
        address_street: ((this.user !== undefined) ? this.user.address.street : ''),
        address_suite: ((this.user !== undefined) ? this.user.address.suite : ''),
        address_city: ((this.user !== undefined) ? this.user.address.city : ''),
        address_state: ((this.user !== undefined) ? this.user.address.state : ''),
        address_zipcode: ((this.user !== undefined) ? this.user.address.zipcode : ''),
        address_geo_lat: ((this.user !== undefined) ? this.user.address.geo.lat : ''),
        address_geo_lng: ((this.user !== undefined) ? this.user.address.geo.lng : ''),
        company_name: ((this.user !== undefined) ? this.user.company.name : ''),
        company_catchPhrase: ((this.user !== undefined) ? this.user.company.catchPhrase : ''),
        company_bs: ((this.user !== undefined) ? this.user.company.bs : '')
      },
      rules: {
        username: [
          { required: true, message: 'Please input a Username', trigger: 'blur' },
          { min: 4, max: 255, message: 'Length should be 4 to 255', trigger: 'blur' }
        ],
        name: [
          { required: true, message: 'Please input a Name', trigger: 'blur' },
          { min: 2, max: 255, message: 'Length should be 2 to 255', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please input an Email', trigger: 'blur' },
          { min: 6, max: 255, message: 'Length should be 6 to 255', trigger: 'blur' }
        ],
        address_street: [
          { required: true, message: 'Please input a Street', trigger: 'blur' },
          { min: 4, max: 255, message: 'Length should be 4 to 255', trigger: 'blur' }
        ],
        address_suite: [
          { required: true, message: 'Please input a Suite', trigger: 'blur' },
          { min: 4, max: 255, message: 'Length should be 4 to 255', trigger: 'blur' }
        ],
        address_city: [
          { required: true, message: 'Please input a City', trigger: 'blur' },
          { min: 4, max: 255, message: 'Length should be 4 to 255', trigger: 'blur' }
        ],
        address_state: [
          { required: true, message: 'Please input a State', trigger: 'blur' },
          { min: 2, max: 255, message: 'Length should be 2 to 255', trigger: 'blur' }
        ],
        address_zipcode: [
          { required: true, message: 'Please input a Zip Code', trigger: 'blur' },
          { min: 5, max: 255, message: 'Length should be 5 to 255', trigger: 'blur' }
        ],
        company_name: [
          { required: true, message: 'Please input a Company Name', trigger: 'blur' },
          { min: 2, max: 255, message: 'Length should be 2 to 255', trigger: 'blur' }
        ],
        company_bs: [
          { required: true, message: 'Please input a Business Description', trigger: 'blur' },
          { min: 4, max: 255, message: 'Length should be 4 to 255', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log('submit error...');
          return false;
        }
        // Create the New User Object to be Saved
        var user_to_save = {
          id: 0,
          name: this.ruleForm.name,
          username: this.ruleForm.username,
          email: this.ruleForm.email,
          phone: this.ruleForm.phone,
          website: this.ruleForm.website,
          address: {
            street: this.ruleForm.address_street,
            suite: this.ruleForm.address_suite,
            city: this.ruleForm.address_city,
            state: this.ruleForm.address_state,
            zipcode: this.ruleForm.address_zipcode,
            geo: {
              lat: this.ruleForm.address_geo_lat,
              lng: this.ruleForm.address_geo_lng
            }
          },
          company: {
            name: this.ruleForm.company_name,
            catchPhrase: this.ruleForm.company_catchPhrase,
            bs: this.ruleForm.company_bs
          }
        };
        if (this.action === "Edit" && this.user !== undefined) {
          user_to_save.id = this.user.id;
          // Get the Index of the Existing User
          var index = this.users.map(function(e) { return e.id; }).indexOf(this.user.id);
          this.users[index] = user_to_save;
        } else {
          user_to_save.id = this.getNewID(this.users);
          this.users.push(user_to_save);
        }
        console.log('submit success!!!');
        this.$router.push('/users/');
      });
    },
    getNewID(users) {
      var newID = 0;
      for (var i = (users.length - 1); i >= 0; i--) {
        if (users[i].id > newID) {
          newID = users[i].id;
        }
      }
      newID++;
      return newID;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addEditUser {
    max-width: 720px;
    margin: auto;
  }
  .split-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  h3 {
    text-align: left;
    margin-left: 120px;
  }
</style>
