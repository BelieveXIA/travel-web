<template>
  <ul class="alphabet">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      // if (this.$refs[e.target.innerText][0] === e.target) {
      //    e.target.className += ' actived'
      // }
      // if (this.$refs[e.target.innerText][0] !== e.target) {
      //   e.target.className = 'item'
      // }
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          const length = this.letters.length
          if (index >= 0 && index < length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.actived
  color: red !important
.alphabet
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.6rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    text-align: center
    line-height: .4rem
    color: $bgColor
</style>
