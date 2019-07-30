import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-335f1.firebaseio.com/"
});

export default instance;
