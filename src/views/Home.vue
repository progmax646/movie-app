<template>
  <div class="cinema pt-100">
    <div class="cinema__header">
      <div class="container">
        <div class="cinema__header_info">
          <div class="cinema__header_info-img">
            <img src="@/assets/img/1.jpg" alt="">
          </div>
          <div class="cinema__header_info-preview">
            <div class="cinema-name">
              <h6>Марсианин</h6>
              <span>2015</span>
            </div>
            <div class="cinema-genre">
              <span>Путешествие, Комедия, Драма</span>
            </div>
            <div class="cinema-rating">
              <i class="fa fa-star" aria-hidden="true"></i>
              <span>8.1/10</span>
              <img src="@/assets/img/imdb.png" alt="" width="50">
            </div>
            <div class="cinema-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, tempora, voluptatibus. Aperiam distinctio id molestias tempore unde? Accusamus aut, dolore earum est ex officiis tenetur. Architecto eaque magni maiores quia.</p>
            </div>
            <div class="cinema-action">
              <button>Смотреть трейлер</button>
              <button>Смотреть</button>
            </div>
          </div>
        </div>
        <div class="cinema__header_tabs">
          <div class="cinema__header_tabs_header">
            <h6>Фильмы</h6>
          </div>
          <div class="cinema__header_tabs_body">
            <div class="cinema__header_tabs_body-item">
              <img src="@/assets/img/2.jpg" alt="" width="200">
              <p>Марсианин</p>
            </div>
            <div class="cinema__header_tabs_body-item">
              <img src="@/assets/img/2.jpg" alt="" width="200">
              <p>Марсианин</p>
            </div>
            <div class="cinema__header_tabs_body-item">
              <img src="@/assets/img/2.jpg" alt="" width="200">
              <p>Марсианин</p>
            </div>
            <div class="cinema__header_tabs_body-item">
              <img src="@/assets/img/2.jpg" alt="" width="200">
              <p>Марсианин</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cinema__category">
      <div class="container">
        <div class="cinema__category_tabs">
          <div class="cinema__category_tabs-item">
            <p>Популярное</p>
          </div>
          <div class="cinema__category_tabs-item">
            <p>Популярное</p>
          </div>
          <div class="cinema__category_tabs-item">
            <p>Популярное</p>
          </div>
          <div class="cinema__category_tabs-item">
            <p>Популярное</p>
          </div>
          <div class="cinema__category_tabs-item">
            <p>Популярное</p>
          </div>          <div class="cinema__category_tabs-item">
          <p>Популярное</p>
        </div>
          <div class="cinema__category_tabs-item">
            <p>Популярное</p>
          </div>
        </div>
      </div>
      <div class="cinema__category_slide">
        <div class="container">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getBackground () {
      return {
        'background-image': 'url(\'@/img/back_test.jpg\')'
      }
    }
  },
  methods: {
    changed (val) {
      console.log(val)
    },
    updated (val) {
      console.log(val)
    }
  }
}
</script>
