<template>
  <div class="genre-list">
    <GenreCard v-for="genre in genres" :key="genre.id" :genre="genre" />
  </div>
</template>

<script>
import GenreCard from "@/components/GenreCard.vue";
import store from "@/store/index";

// Bud -- I was trying to use mapState here, but it wasn't working...
// Any ideas? Computed seems like the wrong way to do this
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
