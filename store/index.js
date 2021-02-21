import {loadYmap} from 'vue-yandex-maps'

export default {
  state() {
    return {
      weather: null,
      coords: null,
      daily: null,
      history: []
    }
  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather
      state.history.push(weather)
    },
    setCoords(state, coords) {
      state.coords = coords
    },
    setWeatherDaily(state, daily) {
      state.daily = daily
    },
  },
  actions: {
    async search({commit, dispatch}, payload) {
      try {
        const data = await this.$axios.$get(
          `http://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${process.env.API_SECRET}`
        )
        commit('setCoords', data.coord)
        commit('setWeather', data)
        dispatch('furtherPrognosis', data)
      } catch (e) {
        console.log(e)
      }
    },
    async furtherPrognosis({commit}, payload) {
      try {
        const data = await this.$axios.$get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${payload.coord.lat}&lon=${payload.coord.lon}&exclude=current&units=metric&appid=${process.env.API_SECRET}`
        )
        console.log('Прогноз на 8', data)
        commit('setWeatherDaily', data)

      } catch (e) {
        console.log(e)
      }
    },
    async determineGeolocation({dispatch}) {
      const settings = {
        apiKey: process.env.API_SECRET_YANDEX,
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      }
      await loadYmap(settings)

      const location = ymaps.geolocation.get({provider: 'yandex',})
      location.then(
        async function (result) {
          const geolocation = await result.geoObjects.get(0).properties.get('name')
          // const userCoodinates = await result.geoObjects.get(0).geometry.getCoordinates()
          dispatch('search', geolocation)
        },
        function (err) {
          console.log('Ошибка: ' + err)
        }
      )
    }
  },
  getters: {
    weather(state) {
      return state.weather
    },
    coords(state) {
      return state.coords
    },
    daily(state) {
      return state.daily
    },
    history(state) {
      return state.history
    }
  },
}
