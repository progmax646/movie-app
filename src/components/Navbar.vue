<template>
<div class="nav">
  <div class="nav__body">
    <div class="nav__body_item">
      <div class="logo">
        <h4>Cinemaplus</h4>
      </div>
    </div>
    <div class="nav__body_item">
      <div class="nav__body_item-tabs">
        <a href="#" :class="{active: activeCategory === 2}" @click="changeCategory(2)">Сериалы</a>
        <a href="#" :class="{active: activeCategory === 1}" @click="changeCategory(1)">Фильмы</a>
      </div>
    </div>
    <div class="nav__body_item">
      <div class="nav__body_item-search">
        <button><i class="fa fa-search" aria-hidden="true"></i></button>
        <button type="button">Поиск</button>
      </div>
      <button>Войти</button>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import {mapState} from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState('Movie', ['activeCategory'])
  },
  methods: {
    async changeCategory(val) {
      await this.$store.dispatch('Movie/getPopular', { category: val })
    }
  }
}
</script>

<style scoped>

</style>
