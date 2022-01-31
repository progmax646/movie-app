<template>
  <div class="film">
    <div class="container">
      <div class="film__header">
        <div class="film__header_text">
          <h4>Фильмы</h4>
        </div>
        <div class="film__header_search">
          <input type="text" placeholder="Введите название">
          <button type="submit">Поиск</button>
        </div>
      </div>
      <div class="film__body">
        <div class="film__body_films" v-if="getFilms !== '' ">
          <div class="film__body_films_item" v-for="film in getFilms" :key="film.id">
            <div class="film__body_films_item_preview">
              <div class="film__body_films_item_preview_img">
                <img :src="'https://image.tmdb.org/t/p/w220_and_h330_face/' + film.backdrop_path" alt="">
              </div>
              <div class="film__body_films_item_preview_text">
                <p>{{ film.title }}</p>
                <p>{{ film.release_date }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="film__body_not-found" v-else>
          <h5>Не найдено</h5>
        </div>
      </div>
      <div class="film__pagination">
        <v-pagination
          v-model="film.page"
          :pages="films.total_pages"
          :range-size="1"
          active-color="#DCEDFF"
          @update:modelValue="pageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VPagination from '@hennge/vue3-pagination'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'
export default {
  name: 'Home',
  data () {
    return {
      film: {
        languageFilm: 'ru',
        regionFilm: '',
        releaseDate: '2022-01-01',
        page: null
      }
    }
  },
  computed: {
    ...mapState('Movie', ['films']),
    getFilms () {
      if (this.films.length !== 0) {
        return this.films.results
      } else {
        return ''
      }
    }
  },
  methods: {
    async pageChange (page) {
      this.film.page = page
      await this.$store.dispatch('Movie/getFilmsByFilters', this.film)
    }
  },
  created () {
    this.$store.dispatch('Movie/getFilmsByFilters', this.film)
  },
  components: {
    VPagination
  }

}
</script>
