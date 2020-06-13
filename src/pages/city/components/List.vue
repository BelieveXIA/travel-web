<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div
            class="btn-wrapper"
            v-for="item in hotcities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) in cities" :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerCity in item"
            :key="innerCity.id"
            @click="handleCityClick(innerCity.name)"
          >
            {{innerCity.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    },
    hotcities: {
      type: Array,
      default () {
        return []
      }
    },
    letter: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState({
      // this.$store.state.city
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    },
    $route () {
      this.scroll = new BScroll(this.$refs.wrapper, {click: true})
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  position: absolute
  top: 1.6rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .title
    background: #eee
    line-height: .54rem
    padding-left: .2rem
    color: #666
  .btn-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .btn-wrapper
      float: left
      width: 33.33%
      .button
        padding: .1rem 0
        text-align: center
        margin: .1rem
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
