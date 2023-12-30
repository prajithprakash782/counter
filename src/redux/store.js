import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

export const store = configureStore({
    //reducer can only update the value of state in store
    //reducer is a predefined key (object which can hold more than one reducer)
    reducer:{
        counter: slice
    }
})