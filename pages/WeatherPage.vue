<template>
  <div class="container">
    <loader v-if="!weather"></loader>

    <div class="main-card" v-if="weather">
      <weather-current
        :weather="weather"
      ></weather-current>
      <card-map></card-map>
    </div>


    <div class="grid" v-if="daily">
      <h2>Прогноз на 8 дней</h2>
      <div class="grid-container">
        <weather-table
          v-for="item in daily.daily"
          :key="item.id"
          :item="item"
        ></weather-table>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  computed: {
    weather() {
      return this.$store.getters.weather
    },
    daily() {
      return this.$store.getters.daily
    }
  },
  mounted() {
    this.$store.dispatch('determineGeolocation')
  },

}
</script>

<style>
  .container {
    margin: 0 auto;
    max-width: 80%;
    width: auto;
  }

  .main-card {
    overflow: hidden;
    padding: 1rem;
    border-radius: 30px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    background: #fff;
    font-weight: normal;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 80%;
    margin: 60px auto;
  }

  .grid {
    margin: auto;
    flex-direction: column;
    display: flex;
  }

  .grid-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
