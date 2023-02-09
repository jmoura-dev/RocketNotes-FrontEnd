import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-z90h.onrender.com"
})