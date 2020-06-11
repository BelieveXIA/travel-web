<template>
 <div class="icons">
  <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="(page, index) in pages" :key="index">
      <div class="icon-item" v-for="item in page" :key="item.id">
        <div class="icon-item-img">
          <img :src="item.imgUrl" alt="" />
        </div>
        <p class="icon-item-text">{{item.iconText}}</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination" v-if="showPagination"></div>
  </swiper>
 </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: false,
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.list.length
    },
    showPagination () {
      return (this.pages.length >= 2)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icons >>> .swiper-pagination-bullet-active
  background: bule !important
.icons
  margin-top: .2rem
  .icon-item
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-item-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      img
        height: 100%
        display: block
        margin: 0 auto
    .icon-item-text
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
