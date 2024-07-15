import { createSlice } from "@reduxjs/toolkit"



const initialState=
    {
        id:1,
        value:2
    }

const counterSlice=createSlice({
    name:'counters',
    initialState,
    reducers:{

        Increment:(state)=>{
            
            state.value++
        },
        Decrement:(state)=>{
            state.value--
        }    
    }
})

export default counterSlice.reducer;
export const {Increment, Decrement} =counterSlice.actions