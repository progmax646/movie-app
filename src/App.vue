<template>
  <Navbar/>
  <router-view></router-view>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/style.scss";

html {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
}

#app {
  position: relative;
}
.content {
  width: 85%;
}

.container {
  width: 1240px;
  margin: 0 auto;
}
</style>
