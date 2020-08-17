import { createSlice } from '@reduxjs/toolkit'

const itemsSlice = createSlice({
    name:'items',
    initialState:{
        loading:false,
        error:false,
        itemsList:[]
    },
    reducers:{
        getList: state =>{
            state.loading=true
        },
        getListSuccess:(state,{payload}) =>{
            state.itemsList = payload
            state.loading=false
            state.error = false
        },
        getListError:(state,{payload}) =>{
            state.loading = false
            state.itemsList = []
            state.error =true
        }
    }
});

export const {getList,getListSuccess,getListError} = itemsSlice.actions
export default itemsSlice.reducer
