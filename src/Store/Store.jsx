import { configureStore } from "@reduxjs/toolkit";
import Myslice from '../WeatherSlice'

const store = configureStore({
    reducer:{
        weather: Myslice
    }
})

export default store

