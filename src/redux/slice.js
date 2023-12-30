import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        //actions are created inside reducers key
        //logics to update state
        increment:(state,action)=>{
            state.value += action.payload
        },

        decrement:(state, action)=>{
            state.value -= action.payload
        },

        reset:(state)=>{
            state.value = 0
        }
    }
})

export const{increment,decrement,reset} = slice.actions

export default slice.reducer