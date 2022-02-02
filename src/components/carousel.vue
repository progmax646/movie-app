<template>
  <div class="cinema__category_slide_wrapper">
    <div class="cinema__category_slide_wrapper_v-carousel" :style="{marginLeft: styleToSlide + '%'}">
      <carouselItem
        v-for="item in data"
        :key="item.id"
        :itemData="item"
      />
    </div>
  </div>
  <div class="cinema__category_btns">
    <button id="next_btn" @click="getNext()"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
    <button id="prev_btn" @click="getPrev()"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
  </div>
</template>

<script>
import carouselItem from '@/components/carousel-item'
export default {
  name: 'carousel',
  data () {
    return {
      styleToSlide: 0,
      carouselAction: 0 // 1-вперед 2-назад
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    carouselItem
  },
  methods: {
    getNext () {
      this.carouselAction = 1
      const totalProcentToNext = this.data.length * 35
      if (this.styleToSlide >= totalProcentToNext) {
        this.styleToSlide = 0
      }
      if (this.styleToSlide <= Math.floor(this.data.length / 1.5) * -35) {
        this.styleToSlide = 0
      } else {
        this.styleToSlide -= 35
      }
    },
    getPrev () {
      this.carouselAction = 2
      if (this.styleToSlide < 0) {
        this.styleToSlide += 35
      }
      if (this.styleToSlide >= Math.floor(this.data.length / 1.5) * 35) {
        this.styleToSlide = 0
      }
    }
  },
  computed: {
    // getStyle () {
    //   if (this.carouselAction === 1) {
    //     return this.styleToSlide + '%'
    //   } else {
    //     return this.styleToSlide + '%'
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 700px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  button {
    width: 100px;
    margin-right: 5px;
    cursor: pointer;
  }
  .v-carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    transition: all ease .5s;
  }
}
</style>
