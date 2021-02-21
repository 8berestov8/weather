<template>
  <div class="search">
    <form class="search-form" @submit.prevent="onSubmit">
      <input type="text" class="search-from_input" placeholder="Введите название города" v-model="value">
      <btn
        :type="['search-from_button','button-green']"
      >
        Поиск
      </btn>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Search',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    async onSubmit() {
      if (this.value !== '') {
        await this.$store.dispatch('search', this.value)
        this.value = ''
      }
    }
  }
}
</script>

<style scoped>
  .search {
    width: auto;
  }

  .search-form {
    display: flex;
    justify-content: space-around;
  }

  .search-from_input {
    width: 300px;
    outline: none;
  }
</style>
