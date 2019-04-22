<template>
  <el-container>
    <div>统一开发平台</div>
    <div>Unified Development Platform</div>
    <div>
      <div>欢迎登陆</div>
      <el-input>请输入登录账号</el-input>
      <el-input>请输入登录密码</el-input>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .el-container {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(../images/bg-2.png);
    /*background-size: contain;*/
  }
</style>
