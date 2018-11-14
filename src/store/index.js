import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const state = {
    count: 0,
    allcount: 0,
    useTime: 0,
    timer: "",
    token: ""
};

export default new Vuex.Store({
    state,
    actions,
    mutations
});