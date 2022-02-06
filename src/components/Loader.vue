<template>
    <div class="loader">
        <img src="@/assets/img/loader.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
.loader {
    display: flex;
    justify-content: center;
    align-content: center;

    img {
        width: 200px;
    }
}

</style>

<script>
export default {
  name: 'Loader'
}
</script>
