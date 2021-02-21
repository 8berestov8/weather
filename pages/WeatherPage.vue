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
      <h2>
        Прогноз на 8 дней
        <btn
          :type="['search-from_button','button-grey']"
          v-if="history.length"
          @change="isShow = !isShow"
        >Показать историю
        </btn>
      </h2>
      <div class="grid-container">
        <weather-table
          v-for="item in daily.daily"
          :key="item.id"
          :item="item"
        ></weather-table>
      </div>


      <div class="history" v-if="history" v-show="isShow">
        <h2>История просмотра</h2>

        <div v-for="weather in history">
          <weather-current
            :key="weather.id"
            :weather="weather">
          </weather-current>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    weather() {
      return this.$store.getters.weather
    },
    daily() {
      return this.$store.getters.daily
    },
    history() {
      return this.$store.getters.history
    }
  },
  mounted() {
    this.$store.dispatch('determineGeolocation')
  },
}
</script>

<style>
  h2 {
    display: flex;
    justify-content: space-between;
  }

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
    margin: 50px auto;
  }

  .grid {
    margin: auto;
    flex-direction: column;
  }

  .grid-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .history {
    overflow: scroll;
    display: flex;
    padding: 1rem;
  }
</style>
