<template>
  <div class="login">
    <el-dialog :visible.sync="show" title="登录" width="500px">
      <el-form :model="userPerson" label-width="80px" :rules="rules">
        <el-form-item label="邮箱：" prop="account">
          <el-input v-model="userPerson.account">
             <template #append >
              <div v-if="userPerson.type == 1">获取验证码</div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item
          label="密码："
          prop="password"
          v-show="userPerson.type == 0"
        >
          <el-input v-model="userPerson.password" type="password">
           
          </el-input>
        </el-form-item>
        <el-form-item label="验证码：" prop="code" v-show="userPerson.type == 1" >
          <el-input v-model="userPerson.code"></el-input>
        </el-form-item>
      </el-form>
      <div style="text-align: center">
        <el-button @click="changeType">{{userPerson.type==0? '验证码登录':'密码登录'}}</el-button>
        <el-button>去注册</el-button>
        <el-button type="primary">登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "login-in",
  data() {
    return {
      show: false,
      userPerson: {
        type: 0,
        account: "",
        password: "",
        code: "",
      },
      rules: {
        account: { required: true, message: "请输入邮箱", trigger: "blur" },
        password: { required: true, message: "请输入密码", trigger: "blur" },
        code: { required: false, message: "请输入验证码", trigger: "blur" },
      },
      showMessage:true,
    };
  },
  watch: {
    "userPerson.type": {
      handler: function (newValue) {
        if (newValue == 0) {
          this.$set(this.rules.password, "required", true);
          this.$set(this.rules.code, "required", false);
        } else {
          console.log("进来le");
          this.$set(this.rules.code, "required", true);
          this.$set(this.rules.password, "required", false);
        }
      },
      immediate: true,
    },
  },
  methods: {
    changeType() {
      this.userPerson.type == 0
        ? (this.userPerson.type = 1)
        : (this.userPerson.type = 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  &::v-deep .el-dialog__header {
    padding: 0 20px;
    text-align: center;
    background-color: rgb(17, 17, 172);

    .el-dialog__title {
      text-align: center;
      color: #fff;
    }
  }
}
</style>