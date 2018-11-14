
export default {
    addNum({commit}, num) {
        commit("ADDITION_COUNT", num);
    },    
    decNum({commit}, num) {
        commit("DECREMENT_COUNT", num);
    },
    initializeData({commit}) {
		commit("INITIALIZE_DATA");
    },
    setToken({commit}, token) {
		commit("SET_TOKEN", token);
    }
};