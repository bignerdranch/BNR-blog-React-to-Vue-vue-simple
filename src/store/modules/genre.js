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
        // commit("SET_TOTAL_EVENTS", response.headers["x-total-count"]);
        console.log(response);

        commit("SET_GENRES", response.data);
      })
      .catch((error) => {
        console.log("There was a problem fetching genres", error);
      });
  },
};

// export const getters = {
//   getEventById: (state) => (id) => {
//     return state.events.find((event) => event.id === id);
//   },
// };
