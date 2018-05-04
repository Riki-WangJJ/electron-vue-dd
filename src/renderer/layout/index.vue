<template>
  <div class="layout-container">
    <div class="layout-menu">
      用户
    </div>
    <div class="layout-content">
      <div class="layout-top">
        <div class="laout-handles">
          <span class="iconfont icon-zuixiaohua"></span>
          <span class="iconfont icon-zuidahua"></span>
          <span class="iconfont icon-guanbi" @click="closeWin"></span>
        </div>
      </div>
      <slot class="ott-content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closeWin () {
        console.log(this.$electron)
        const {ipcRenderer} = this.$electron
        ipcRenderer.send('close-win')
      }
    }
  }
</script>

<style scoped>
  .layout-container {
    height: 100vh;
    display: flex;
  }
  .layout-menu {
    width: 68px;
    background: #4A9CFA;
  }
  /* 顶部导航 */
  .layout-top {
    height: 58px;
    position: relative;
  }
  .laout-handles {
    position: absolute;
    right: 0;
    height: 100%;
    line-height: 58px;
    padding-left: 20px;
    border-left: 1px solid #ccc;
  }
  .laout-handles span::before {
    margin-right: 18px;
    color: #000;
    cursor: pointer;
  }
  /* 内容区域 */
  .layout-content {
    flex: 1;
  }
  
</style>