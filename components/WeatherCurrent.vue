<template>
  <div class="main-card_card">
    <div class="main-card_card_date">
      <span>{{ date }}</span>
      <span>{{ time }}</span>
    </div>

    <div class="main-card_title">
      <span>{{ weather.name }}</span>
      <span>{{ weather.country }}</span>
    </div>

    <div class="main-card_weather">
      <div class="main-card_weather_header">
        <weather-icon></weather-icon>
        <span>{{ parseInt(weather.main.temp) }} °С</span>
      </div>
      <div class="main-card_temp">
        <span>По ощущениям: {{ parseInt(weather.main.feels_like) }} °С,</span>
        <span>min: {{ parseInt(weather.main.temp_min) }} °С,</span>
        <span>max: {{ parseInt(weather.main.temp_max) }} °С</span>
      </div>
    </div>

    <div class="main-card_desc">
      <div>
        <p>Ветер: {{ weather.wind.speed }} М/С</p>
        <p>Давление: {{ weather.main.pressure }} гПа</p>
      </div>
      <div>
        <p>Влажность: {{ weather.main.humidity }}%</p>
        <p>Видимость: {{ weather.visibility }} км</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherCurrent',
  props: ['weather'],
  computed: {
    date() {
      return new Date(this.weather.dt * 1000).toLocaleDateString()
    },
    time() {
      return new Date(this.weather.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    }
  }
}
</script>

<style scoped>
  .main-card_card {
    margin: 1rem;
    min-width: 25vh;
  }

  .main-card_card_date {
    color: red;
    font-weight: normal;
    font-size: 13px;
  }

  .main-card_temp {
    color: green;
  }

  .main-card_weather_header {
    display: flex;
    align-items: center;
  }

  .main-card_title {
    font-weight: bold;
  }
</style>

