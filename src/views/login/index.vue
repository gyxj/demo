<template>
  <div class="login-wrapper">
    <div class="img-wrapper">
      <img src="./login_center_bg.png" :height="pageHeight" width="100%" />
    </div>
    <h2 class="main-title color-main">IACE英语培训运营管理系统</h2>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-position="left">
        <h2 class="login-title">欢迎登录</h2>
        <el-form-item prop="logincode" style="margin-top: 40px;">
          <el-input name="logincode"
            type="text"
            @input="logiinChange"
            v-model="loginForm.logincode"
            autoComplete="on"
            placeholder="请输入用户名">
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="loginpwd" style="margin-bottom: 40px;">
          <el-input name="loginpwd"
            :type="pwdType"
            @input="logiinChange"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.loginpwd"
            autoComplete="on"
            placeholder="请输入密码">
            <span slot="prefix">
              <svg-icon icon-class="password" class="color-main"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon v-if="pwdType" icon-class="eye" class="color-main"></svg-icon>
              <i v-else class="el-icon-view" style="color: #409EFF"></i>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 20px;text-align: center">
          <el-button style="width: 45%" :type="loginType" :loading="loading" @click.native.prevent="handleLogin" :disabled="loginDisabled" round>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {isvalidLogincode} from '@/utils/validate';
  import {setSupport,getSupport,setCookie,getCookie} from '@/utils/support';

  export default {
    name: 'login',
    data() {
      const validateLogincode = (rule, value, callback) => {
        // if (!isvalidLogincode(value)) {
        //   callback(new Error('请输入正确的用户名'))
        // } else {
        //   callback()
        // }
        callback()
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位'))
        } else {
          callback()
        }
      };
      return {
        pageHeight: 0,
        loginType: 'info',
        loginDisabled: true,
        loginForm: {
          logincode: '',
          loginpwd: '',
        },
        loginRules: {
          logincode: [{required: true, trigger: 'blur', validator: validateLogincode}],
          loginpwd: [{required: true, trigger: 'blur', validator: validatePass}]
        },
        loading: false,
        pwdType: 'password',
        //login_center_bg,
        dialogVisible:false,
        supportDialogVisible:false
      }
    },
    created() {
      this.loginForm.logincode = getCookie("logincode");
      this.loginForm.loginpwd = getCookie("loginpwd");
      if(this.loginForm.logincode === undefined||this.loginForm.logincode==null||this.loginForm.logincode===''){
        this.loginForm.logincode = 'admin';
      }
      if(this.loginForm.loginpwd === undefined||this.loginForm.loginpwd==null){
        this.loginForm.loginpwd = '';
      }
      this.pageHeight = window.innerHeight - 10
      this.logiinChange()
    },
    methods: {
      //控制登录按钮的禁用和颜色变化
      logiinChange() {
        if(this.loginForm.logincode && this.loginForm.loginpwd) {
          this.loginType = 'primary'
          this.loginDisabled = false
        } else {
          this.loginType = 'info'
          this.loginDisabled = true
        }
      },
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('Login', this.loginForm).then((Response) => {
              this.loading = false;
              setCookie("logincode",this.loginForm.logincode,15);
              setCookie("loginpwd",this.loginForm.loginpwd,15);
              this.$router.push({path: '/'})
            }).catch((errorTips) => {
              this.$message({message: errorTips,type: 'error',duration:1000});    
              this.loading = false
            })
          } else {
            console.log('参数验证不合法！');
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-wrapper {
    position: relative;
  }
  img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .main-title {
    position: absolute;
    top: 10px;
    left: 150px;
    font-size: 35px;
    z-index: 99;
  }
  .login-form-layout {
    position: absolute;
    top: 28%;
    left: 55%;
    width: 300px;
    z-index: 999;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    width: 100%;
  }
</style>
