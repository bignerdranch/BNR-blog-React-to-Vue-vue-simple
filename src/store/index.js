import Vue from "vue";
import Vuex from "vuex";
import * as genre from "@/store/modules/genre.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    genre,
  },
});
