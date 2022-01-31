export default {
  namespaced: true,
  state () {
    return {
      movieUrl: 'https://api.themoviedb.org/3',
      movieApi: 'eb907947fd7199589bf44f04293b4850',
      films: []
    }
  },
  mutations: {
  },
  actions: {
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
    }
  },
  getters: {
  }
}
