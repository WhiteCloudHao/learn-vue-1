<template>
    <div id="loginForm" >
      
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Name" prop="name">
         <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    
   
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
         <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
    
   
  
    </div>
  </template>
  
  <script>
    import store from '@/store';
    import  {mapActions} from 'vuex'
  const component = {
    name: "LoginForm",
    data() {
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('Please input the age'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('Please input digits'));
            } else {
              if (value < 18) {
                callback(new Error('Age must be greater than 18'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Please input the password'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
       
        return {
          ruleForm: {
            name:'',
            pass: '',
            checkPass: '',
            age: ''
          },
          rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
           
            age: [
              { validator: checkAge, trigger: 'blur' }
            ],
            name: [
              { required: true, message: 'Please input Activity name', trigger: 'blur' },
              { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
            ],
          }
        };
      },
      methods: {
        ...mapActions(['commitlogin']),
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              
             const data = {
              name: this.ruleForm.name,
              pass: this.ruleForm.pass
             }
             store.dispatch('commitlogin', data)
             
              
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        
      }
    
    
  };
  
  export default component;
  </script>
  
  <style>
  .oneLineDisplay {
     display: block;
     width: 300px;
     height: 30px;
     padding: 20px;
     
  }
  </style>