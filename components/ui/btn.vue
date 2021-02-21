<template>
  <button :class="type" @click="$emit('change')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'btn',
  emits: ['change'],
  props: {
    type: {
      type: Array,
      required: true
    },
  }
}
</script>

<style scoped>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  .button-green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 5px 30px;
    outline: none;
  }

  .button-green:hover {
    color: #fff;
    background-color: #3b8070;
    outline: none;
  }

  .button-grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
    outline: none;
  }

  .button-grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
