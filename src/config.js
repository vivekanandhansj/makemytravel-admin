import axios from "axios"

export const axiosInstance = axios.create({
    baseUrl : "https://makemytravel-backend.herokuapp.com/api/"
})