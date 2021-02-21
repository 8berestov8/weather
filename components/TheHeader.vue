<template>
  <div class="header">
    {{ title }}
    <search></search>
  </div>

</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String,
    }
  }
}
</script>

<style scoped>
  .header {
    align-items: center;
    background-color: #35495e;
    color: white;
    display: flex;
    font-size: 36px;
    font-weight: 700;
    justify-content: space-around;
    padding: 15px;
  }

</style>
