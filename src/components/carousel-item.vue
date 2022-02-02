<template>
<div class="v-carousel-item">
  <img :src=" require('@/assets/img/' + itemData.img) " alt="" width="200">
</div>
</template>

<script>
export default {
  name: 'carouselItem',
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.v-carousel-item {
  margin-right: 30px;
  min-width: 220px;
}
</style>
