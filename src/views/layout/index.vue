<template>
    <div class="layout">
      <Menu></Menu>
      <keep-alive>
        <router-view class="router-view" />
      </keep-alive>
    </div>
</template>

<script>
import Menu from './Menu'
export default {
  data () {
    return {}
  },
  components: {
    Menu
  }
}
</script>

<style scoped lang="less">
.layout{
  width: 100%;
  display: flex;
  .router-view{
    margin-left: 10px ;
    width: calc(100% - 290px);
    background: #ffffff;
    padding: 20px;
  }
}
</style>
