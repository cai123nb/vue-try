<template>
    <div>
        <h2> {{msg}} </h2>
        <div><span>Use time: </span> {{useTime}}</div>
        <div><span>Count value: </span> {{count}}</div>
        <div><span>Allcount times: </span> {{allcount}}</div>
        <hr />
        <input type="number" v-model="addValue" placeholder="input a add value">
        <button @click="add">Add to count</button>
        <input type="number" v-model="decValue" placeholder="input a dec value">
        <button @click="dec">Dec to count</button>
        <h5>{{ getResult }}</h5>
        <button @click="sendGet">Sent Get Method</button>
        <h5>{{ postResult }}</h5>
        <button @click="sendPost">Sent Post Method</button>
        <hr />
        <button @click="home">Go to home</button>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import {login, getIndex} from "../api/login";
export default {
    name: "Test",
    data() {
        return {
            msg: "This is my first app vue with vuex",
            addValue: 0,
            decValue: 0,
            getResult: "AS",
            postResult: "AS"
        };
    },
    computed: mapState([
        "count",
        "allcount",
        "useTime",
        "token"
    ]),
    methods: {
        ...mapActions(["addNum", "decNum", "initializeData","setToken"]),
        home: function() {
            this.$router.push("/");
        },
        add: function() {
            if (this.addValue > 0) {
                this.addNum(this.addValue);
            } else {
                alert("Please input a positive value!");
            }
        },
        dec: function() {
            if (this.decValue > 0) {
                this.decNum(this.decValue);
            } else {
                alert("Please input a positive value!");
            }
        },
        sendGet: function() {
            getIndex()
                .then(res => this.getResult = res.data);
        },
        sendPost: function() {
            login("cjyong","cai356313")
                .then(res => {this.postResult = res.data; this.setToken(res.data.data.jwtToken);});
        }
    },
    created: function() {
        this.initializeData();
    }
};
</script>

<style scoped>

</style>


