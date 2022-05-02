import axios from "axios";

const unsplashConfigInstance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID UjzNb2Ug6ciIm3-IXs5cJ-PTSSUxeWYCkkVBAK62aXg",
  },
});

export default unsplashConfigInstance;
