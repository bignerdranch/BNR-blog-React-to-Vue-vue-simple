<template>
  <div class="genre-card">
    <h4>{{ genre.genre }}</h4>
    <p>{{ genre.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    genre: Object,
  },
};
</script>

<style lang="css" scoped>
.genre-card {
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid black;
}
</style>
