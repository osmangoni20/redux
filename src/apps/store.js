import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";



const store =configureStore({
    reducer:{
        counters:counterReducer
    }
})


export default store