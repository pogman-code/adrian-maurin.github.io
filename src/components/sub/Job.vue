<template>
  <div class="job">
    <span class="date secondary">{{ date }}</span>
    <h3>{{ title }}</h3>

    <h4 v-html="place"></h4>
    <span></span>
    <p v-for="line in description" v-html="line" :key="line.id"></p>
  </div>
</template>

<script>
export default {
  name: 'Job',
  props: ['title', 'place', 'description', 'date']
}
</script>

<style lang="scss" scoped>
.date {
  float: right;
}
</style>
