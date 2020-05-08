import GenreService from "@/services/GenreService.js";

export const namespaced = true;

export const state = {
  genres: [],
};

export const mutations = {
  SET_GENRES(state, genres) {
    state.genres = genres;
  },
};

export const actions = {
  fetchGenres({ commit }) {
    return GenreService.getGenres()
      .then((response) => {
        commit("SET_GENRES", response.data);
      })
      .catch((error) => {
        console.log("There was a problem fetching genres", error);
      });
  },
};
