<template>
  <div >
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <span class="back-btn iconfont">&#xe624;</span>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/" >
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      <span>景点详情</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opa = top / 140
        opa = opa > 1 ? 1 : opa
        this.opacityStyle = { opacity: opa }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destoryed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  line-height: .8rem
  border-radius: .4rem
  background: rgba(0, 0, 0, .75)
  text-align: center
  .back-btn
    color: #fff
    font-size: .4rem
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
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
