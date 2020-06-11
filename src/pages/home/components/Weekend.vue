<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.weekend-title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item-img-wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 37.09%
  .item-img
    width: 100%
.item-info
  flex: 1
  padding: 0.1rem
  min-width: 0
  .item-title
    font-size: 0.32rem
    line-height: .54rem
    ellipsis()
  .item-desc
    font-size: .28rem
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
