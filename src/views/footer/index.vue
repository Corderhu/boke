<template>
  <div class="layout-footer">
    <div style="margin-bottom:20px">Copyright @huxukang</div>
    <div>
      <a href="https://beian.miit.gov.cn/" target="_blank" style="margin-right:5px">网站备案号: </a>
      <a href="https://beian.miit.gov.cn/" target="_blank"> 苏ICP备2022000655号-1</a>
    </div>
  </div>
</template>
<script>
export default {
  name:'layout-footer',
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.layout-footer{
  width: 100%;
  height: 110px;
  background-color: #000;
  text-align: center;
  padding: 30px;
  color: #fff;
  a{
    text-decoration: none;
    font-size: 14px;
    color: #fff;
  }
}
</style>