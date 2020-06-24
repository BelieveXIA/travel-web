<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="banner-icon iconfont">&#xe616;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallClose"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
import FadeAnimation from 'common/fade/Fade.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: {
      type: String,
      default: ''
    },
    bannerImg: {
      type: String,
      default: ''
    },
    gallaryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 51%
  .banner-img
    width: 100%
  .banner-info
    position: absolute
    display: flex
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .75))
    .banner-title
      font-size: .32rem
      padding: 0 .2rem
      flex: 1
    .banner-number
      height: .32rem
      padding: 0 .3rem
      margin-top: .14rem
      line-height: .32rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
        margin-right: .08rem
</style>
