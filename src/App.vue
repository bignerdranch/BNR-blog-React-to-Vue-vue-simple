<template>
  <div id="app">
    <h1>Genres</h1>
    <GenreList />
  </div>
</template>

<script>
import GenreList from "@/components/GenreList.vue";

export default {
  name: "App",
  components: {
    GenreList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
