<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <span>城市选择</span>
  </div>
</template>

<script>

export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  font-size: .38rem
  text-align: center
  .header-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    color: #fff
    font-size: .4rem
</style>
