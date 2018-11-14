import {baseUrl} from "./env";
import axios from "axios";
import store from "../store";

const request = axios.create({
    baseURL: baseUrl, // api 的 base_url
    timeout: 2000 // request timeout
});

// request interceptor
request.interceptors.request.use(
    config => {
      // Do something before request is sent
      if (store.state.token != "") {
        config.headers["x-access-token"] = store.state.token;
      }
      return config;
    }
);

export default request;