<template>
  <div id="app">
    <div class="header">
    <el-menu
      :default-active="index"
      :router="true"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="collect">信息录入</el-menu-item>
      <el-menu-item index="tips">提醒</el-menu-item>
    </el-menu>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      index: this.$route.name
    }
  },
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 1200px;
  height: 1100px;
  margin: 0 auto;
  background-color: lightgray;
}
.el-menu-item{
  font-size: 18px;
}
.el-table td, .el-table th {
  padding: 6px;
  text-align: center;
}
.el-table .warning-row {
  background:white;;
}
</style>
