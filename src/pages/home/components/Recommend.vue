<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt="" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <div class="item-price">
            <span>￥<em>{{item.price}}</em></span>起
            <button class="item-btn">查看详情</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
.recommend-title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflow: hidden
  height: 1.9rem
  display: flex
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
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
    .item-price
      margin-top: .16rem
      font-size: .32rem
      line-height: .54rem
      position: relative
      span
        color: #ff9300
        em
          font-size: .52rem
      .item-btn
        position: absolute
        right: .3rem
        bottom: .1rem
        background: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
</style>
