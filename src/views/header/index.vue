<template>
  <div class="lay-header">
    <span>个人博客</span>
    <div class="cell"  @click="showMessage">
      <span>首页</span>
      <span>生活</span>
      <span>关于我</span>
      <span>留言板</span>
      <span>博客</span>
      <span>技术</span>
    </div>
    <span class="login" @click="login">登录</span>
    <Login ref="login"/>
  </div>
</template>
<script>
import Login from '../login/index.vue'
export default {
  components:{
    Login,
  },
  name:'lay-header',
  data(){
    return{

    }
  },
  methods:{
    showMessage(){
      this.$confirm('本项目还在开发中！','提示',{
        type:'warning'
      }).then(()=>{

      }).catch(()=>{

      })
    },
    login(){
      this.$refs.login.show = true
    }
  }
}
</script>
<style lang="scss" scoped>
.lay-header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: rgba(0,0,0,0.5);
  padding: 0 30px;
  color:#fff;
  .cell{
    display: inline-block;
    margin-left: 100px;
    span{
      display: inline-block;
      padding:0 30px;
      cursor: pointer;
      &:hover{
        background-color: rgb(118, 115, 115);
      }
    }
  }
  .login{
    float:right;
    cursor: pointer;
  }
}
</style>