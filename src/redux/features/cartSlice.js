import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carts : []
}

const cartSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.carts.findIndex((item)=>item.id === action.payload.id)
      if(itemIndex >=0){
        state.carts[itemIndex].qnty += 1
        return
      }else{
        state.carts = [...state.carts, {...action.payload, qnty : 1}]
      }
    },
    removeItem(state,action){
      const itemIndex = state.carts.findIndex((item)=>item.id === action.payload)
      if(itemIndex >=0 && state.carts[itemIndex].qnty >1){
        state.carts[itemIndex].qnty -= 1
        return
      }else{
        state.carts = state.carts.filter((item)=>item.id !== action.payload)
      }
    },
    emptyCart(state){
      state.carts = []
    },
    deleteItem(state, action){
      state.carts = state.carts.filter((item)=>item.id !== action.payload)
    }
  }
})

export const { addItem, removeItem, deleteItem, emptyCart } = cartSlice.actions
export default cartSlice.reducer