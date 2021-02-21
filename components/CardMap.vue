<template>
  <yandexMap
    :coords="[lat,lon]"
    :zoom="10"
    :controls="[]"
  />
</template>

<script>
import {yandexMap} from 'vue-yandex-maps'

export default {
  name: 'CardMap',
  data() {
    return {}
  },
  computed: {
    lat() {
      return this.$store.getters.coords.lat
    },
    lon() {
      return this.$store.getters.coords.lon
    },

  },
  components: {yandexMap}
}
</script>
<style>
  .ymap-container {
    height: 300px;
    width: 50%;
  }
</style>
