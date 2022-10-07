<template>
  <div class="lay-out">
    <el-container>
      <el-header style="padding:0">
        <Header></Header>
      </el-header>
      <el-main style="padding:0">
        <div class="lay-content"></div>
      </el-main>
      <el-footer style="padding:0">
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from '../header/index.vue'
import Footer from '../footer/index.vue'
export default {
  name: "lay-out",
  components:{
    Footer,
    Header
  },
  data() {
    return {};
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
.lay-out{
  min-height: 100vh;
  background-image: url('@/assets/img/bg.gif');
  background-size: 100%  auto;
  background-repeat:no-repeat;
  .lay-content{
    min-height:calc(100vh - 170px);
  }
}
</style>