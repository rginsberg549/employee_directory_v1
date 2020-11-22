import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=50";

export default {
  getEmployees: function(query) {
    return axios.get(BASEURL);
  }
};