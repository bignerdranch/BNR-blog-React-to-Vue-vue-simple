<template>
  <div class="genre-list">
    <GenreCard v-for="genre in genres" :key="genre.id" :genre="genre" />
  </div>
</template>

<script>
import GenreCard from "@/components/GenreCard.vue";
import genreService from "@/services/GenreService";

export default {
  components: {
    GenreCard
  },
  data() {
    return {
      genres: []
    };
  },
  mounted() {
    genreService
      .getGenres()
      .then(res => (this.genres = res.data))
      .catch(error => console.log("There was an error", error));
  }
};
</script>

<style lang="css" scoped>
.genre-list {
  padding: 0 15%;
}
</style>
