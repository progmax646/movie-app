import { URLSearchParams } from 'core-js/modules/web.url-search-params'

export default {
  namespaced: true,
  state () {
    return {
      movieUrl: 'https://api.themoviedb.org/3',
      movieApi: 'eb907947fd7199589bf44f04293b4850',
      films: [],
      genres: [],
      popularObj: [],
      popularObjs: [],
      activeCategory: 1
    }
  },
  mutations: {
    /* eslint-disable */
    changeActiveCategory (state, category) {
       state.activeCategory = category
    }
  },
  actions: {
    /* eslint-disable */
    async searchFilmByName ({ state }, data) {
      // поиск фильма по региону и названию
      try {
        await fetch(state.movieUrl + '/search/movie?' + new URLSearchParams({
          api_key: state.movieApi,
          query: data.filmName,
          language: data.languageFilm,
          region: data.regionFilm
        }))
          .then(data => {
            return data.json()
          })
          .then(data => {
            console.log(data)
          })
      } catch (e) {
        alert(e)
      }
    },
    async getFilmsByFilters ({ state }, data) {
      try {
        await fetch(state.movieUrl + '/discover/movie?' + new URLSearchParams({
          api_key: state.movieApi,
          language: data.languageFilm,
          region: data.regionFilm,
          'release_date.gte': data.releaseDate,
          with_release_type: '2|3',
          page: (data.page || '')
        }))
          .then(data => {
            return data.json()
          })
          .then(data => {
            state.films = data
          })
      } catch (e) {
        alert(e)
      }
    },
    // поиск жанров фильмов
    async getMovieGenre ({ state }) {
      try {
        await fetch (state.movieUrl + '/genre/movie/list?' + new URLSearchParams({
          api_key: state.movieApi,
          language: 'ru'
        }))
          .then (data => {
            return data.json()
          })
          .then (data => {
            state.genres = data.genres
          })
      } catch (e) {
        alert(e)
      }
    },
    // поиск популярного фильма
    async getPopular({ state }, data) {
      // category = 1 - фильмы ; 2 - сериалы
      state.activeCategory = data.category
      try {
        await fetch(state.movieUrl + (state.activeCategory === 1?'/movie/popular?':'/tv/popular?') + new URLSearchParams({
          api_key: state.movieApi,
          language: 'ru',
        }))
        .then (data => {
          return data.json()
        })
        .then(data => {
          state.popularObjs = data.results
          state.popularObj = data.results[0]
        })
    } catch (e) {
      alert(e)
    }
    }
  },
  getters: {
  }
}
