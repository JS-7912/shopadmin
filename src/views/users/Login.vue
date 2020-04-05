<template>
  <div class="login">
      <!-- el-form -->
          <p class="hlogin">系统登录</p>
    <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="pass">
        <el-input type="text" v-model="ruleForm.pass" placeholder="请输入用户名" autocomplete="off" prefix-icon="el-icon-user-solid" clearable></el-input>
    </el-form-item>
    <el-form-item  prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" placeholder="请输入密码" autocomplete="off" prefix-icon="el-icon-lock" show-password clearable>></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form-item>
   
  
</el-form>
<!-- /el-form -->
  </div>
</template>

<script>
export default {
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
        }
      };
    },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功');
          } else {
            console.log('密码或用户名错误，请重新登录');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}

</script>

<style scoped lang=scss>

.login{
    position: relative;
    width: 100%;
    height: 100%;
    background: #2d3a4b;
    display: flex;
    justify-content: center;
    align-items: center;
    .hlogin{
        font-size: 25px;
        color: #eee;
        position: relative;
        left: 250px;
        top: -150px;
    }
    
    .el-form{
        width: 400px;
        height: 200px;
        
    }
    .el-button{
        width: 100%;
        
    }
}
</style>