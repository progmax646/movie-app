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
        <a href="#" class="active">Сериалы</a>
        <a href="#">Фильмы</a>
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
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
