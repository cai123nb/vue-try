const ADD_COUNT = "ADDITION_COUNT";
const DEC_COUNT = "DECREMENT_COUNT";
const INIT_DATA = "INITIALIZE_DATA";
const SET_TOKEN = "SET_TOKEN";

export default {
    [ADD_COUNT](state, num) {
        state.count += parseInt(num);
        state.allcount++;
    },
    [DEC_COUNT](state, num) {
        state.count -= parseInt(num);
        state.allcount++;
    },
    [INIT_DATA](state, num) {
        state.count = 0;
        state.allcount = 0;
        state.useTime = 0;
        state.timer = setInterval(() => {state.useTime++;}, 1000);
    },
    [SET_TOKEN](state, token) {
        state.token = token;
    }
};