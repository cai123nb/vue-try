import request from "../util/request";
import Qs from "qs";

export function login(username, password) {
    let data = {
        "account": username, 
        "password": password
    };
    data = Qs.stringify(data);
    return request({
        url: "/api/v1/user/login",
        method: "post",
        data
      });
}

export function getIndex() {
    return request({
      url: "/api/v1/dailySentence/indexInfo",
      method: "get"
    });
  }