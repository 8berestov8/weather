<template>
  <div class="card">
    <p class="card_date">{{
        new Date(item.dt * 1000).toLocaleDateString([], {
          day: 'numeric',
          month: 'long',
        })
      }}
    </p>

    <p class="card_temp">
      <span>{{ parseInt(item.temp.day) }}</span> / <span>{{ parseInt(item.temp.night) }}</span> °С
    </p>
    <p class="card_humidity">
      <span>Влажность: {{ item.humidity }} %</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'WeatherTable',
  props: ['item'],
  computed: {
    weatherMain() {
      return this.item.weather[0].main ? 'Clouds' : 'Снежно'
    }
  }
}
</script>

<style scoped>
  .card {
    overflow: hidden;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    display: grid;
    margin: 5px;
    justify-items: center;
  }

  .card:hover {
    opacity: 1;
    background-color: #35495e;
    color: #ffffff;
  }

  .card_date {
    font-style: italic;
    font-weight: bold;
  }

  .card_temp {
    color: red;
  }

  .card_humidity {
    color: green;
  }

</style>
