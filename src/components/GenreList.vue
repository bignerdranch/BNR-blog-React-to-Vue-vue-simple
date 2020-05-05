<template>
  <div class="genre-list">
    <GenreCard v-for="genre in genres" :key="genre.id" :genre="genre" />
  </div>
</template>

<script>
import GenreCard from "@/components/GenreCard.vue";
import store from "@/store/index";
// why wasn't mapState working?

export default {
  computed: {
    genres() {
      return store.state.genre.genres;
    },
  },
  components: {
    GenreCard,
  },
};
</script>

<style lang="css" scoped>
.genre-list {
  padding: 0 15%;
}
</style>
