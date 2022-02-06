<template>
  <div class="cinema pt-100">
    <div class="cinema__header">
      <div class="container">
        <div class="cinema__header_info" v-if="!loader">
          <div class="cinema__header_info-img">
            <img :src="'https://image.tmdb.org/t/p/w500' + popularObj.backdrop_path" alt="">
          </div>
          <div class="cinema__header_info-preview">
            <div class="cinema-name">
              <h6>{{ getTittle(popularObj) }}</h6>
              <span>{{ popularObj.release_date }}</span>
            </div>
            <div class="cinema-genre">
              <span>{{ popularObj.genre_ids }}</span>
            </div>
            <div class="cinema-rating">
              <i class="fa fa-star" aria-hidden="true"></i>
              <span>{{ popularObj.vote_average }}/10</span>
              <img src="@/assets/img/imdb.png" alt="" width="50">
            </div>
            <div class="cinema-text">
              <p>{{ getShortText(popularObj.overview, 200, '...') }}</p>
            </div>
            <div class="cinema-action">
              <button>Смотреть трейлер</button>
              <button>Смотреть</button>
            </div>
          </div>
        </div>
        <div v-else>
          <Loader />
        </div>
        <div class="cinema__header_tabs">
          <div class="cinema__header_tabs_header">
            <h6>Фильмы</h6>
          </div>
          <div class="cinema__header_tabs_body" v-if="!loader">
            <div class="cinema__header_tabs_body-item" v-for="item in getPopularObjs" :key="item.id">
              <img :src="'https://image.tmdb.org/t/p/w200' + item.backdrop_path" alt="">
              <p>{{ getTittle(item) }}</p>
            </div>
          </div>
          <div v-else>
            <Loader />
          </div>
        </div>
      </div>
    </div>
    <div class="cinema__category">
      <div class="container">
        <div class="cinema__category_tabs">
          <div class="cinema__category_tabs-item" v-for="item in getFirstSevenObj" :key="item.id">
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="cinema__category_slide">
        <div class="container">
          <carousel
          :data="sliderData"
          />
        </div>
      </div>
      <div class="cinema__category_films">
        <div class="container">
          <div class="cinema__category_films_body">
            <div class="cinema__category_films_body-item">
              <img src="@/assets/img/1.jpg" alt="">
              <p>Марсианин</p>
              <span>2018</span>
            </div>
            <div class="cinema__category_films_body-item">
              <img src="@/assets/img/1.jpg" alt="">
              <p>Марсианин</p>
              <span>2018</span>
            </div>
            <div class="cinema__category_films_body-item">
              <img src="@/assets/img/1.jpg" alt="">
              <p>Марсианин</p>
              <span>2018</span>
            </div>
            <div class="cinema__category_films_body-item">
              <img src="@/assets/img/1.jpg" alt="">
              <p>Марсианин</p>
              <span>2018</span>
            </div>
            <div class="cinema__category_films_body-item">
              <img src="@/assets/img/1.jpg" alt="">
              <p>Марсианин</p>
              <span>2018</span>
            </div>
            <div class="cinema__category_films_body-item">
              <img src="@/assets/img/1.jpg" alt="">
              <p>Марсианин</p>
              <span>2018</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cinema__category_paginations">
        <div class="container">
          <v-pagination
            v-model="activePage"
            :pages="10"
            :range-size="1"
            :hideFirstButton="true"
            :hideLastButton="true"
            active-color="#A72423"
            @update="updated()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from '../components/carousel'
import Loader from '@/components/Loader'
import VPagination from '@hennge/vue3-pagination'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      sliderData: [
        { id: 1, name: 'img1', img: '1.jpg' },
        { id: 2, name: 'img2', img: '1.jpg' },
        { id: 3, name: 'img3', img: '1.jpg' },
        { id: 4, name: 'img4', img: '1.jpg' },
        { id: 5, name: 'img5', img: '1.jpg' },
        { id: 6, name: 'img6', img: '1.jpg' },
        { id: 7, name: 'img7', img: '1.jpg' }
        // { id: 8, name: 'img8', img: '1.jpg' },
        // { id: 9, name: 'img9', img: '1.jpg' }
      ],
      categoryApp: 1,
      activePage: 0
    }
  },
  computed: {
    ...mapState('Movie', ['popularObj', 'popularObjs', 'genres', 'activeCategory', 'loader']),

    getBackground () {
      return {
        'background-image': 'url(\'@/img/back_test.jpg\')'
      }
    },
    getPopularObjs () {
      const filt = this.popularObjs.filter((item, idx) => idx < 5)
      return filt
    },
    getFirstSevenObj () {
      const result = this.genres.filter((item, idx) => idx < 8)
      return result
    }
  },
  methods: {
    changed (val) {
      console.log(val)
    },
    updated (val) {
      console.log(val)
    },
    getShortText (str, max, add) {
      add = add || '...'
      return (typeof str === 'string' && str.length > max ? str.substring(0, max) + add : str)
    },
    // возврат жанра по id
    // getGenreName (obj = []) {
    //   const allGenres = this.genres
    //   let result = ''
    //   if (obj.length > 0 && allGenres.length > 0) {
    //     obj.forEach((element, idx) => {
    //       const res = allGenres.find(item => item.id === element)
    //       if (obj.length > idx + 1) {
    //         result += res.name + ', '
    //       } else {
    //         result += res.name + '.'
    //       }
    //     })

    //     return result
    //   }

    //   return 'Не найдено'
    // },

    getTittle (obj) {
      const result = this.activeCategory === 1 ? obj.title : obj.name
      return result
    }
  },
  components: {
    carousel,
    VPagination,
    Loader
  },
  async created () {
    await this.$store.dispatch('Movie/getMovieGenre')
    await this.$store.dispatch('Movie/getPopular', { category: 1 })
  }
}
</script>
