import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    amount:0
}
export const getuseraccont = createAsyncThunk(
    "account/getUser",
    async (userId,thunkApi) =>{
        const {data}= await axios.get(`http://localhost:3000/account/${userId}`)
        return data.amount
    }
)
export const accountSlice = createSlice({
    name:"account",
    initialState,
    reducers:{
        increment:(state)=>{
            state.amount+=1
        },
        decrement:(state)=>{
            state.amount-=1
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getuseraccont.fulfilled,(state,action)=>{
            state.amount = action.payload
            state.pending = false
        }).addCase(getuseraccont.pending,(state,action)=>{
           
            state.pending = true
        }).addCase(getuseraccont.rejected,(state,action)=>{
           state.error = action.error
            state.pending = false
        })
    }

})
export const {increment,decrement} = accountSlice.actions
export default accountSlice.reducer
