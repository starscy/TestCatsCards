import { createSlice} from "@reduxjs/toolkit";

const initialState  = {
    gallery : [],
    favorite:[]
}

export const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
      fetchPics: (state, action) => {
        state.gallery = [...state.gallery,action.payload];
      },
      deletePic:(state,action)=>{
        state.gallery=state.gallery.filter(item=>item.id !== action.payload)
        state.favorite=state.favorite.filter(item=>item.id !== action.payload)
      },
      addToFavorite:(state,action)=>{
        state.favorite = [...state.favorite,action.payload]
      },
      removeFromFavorite:(state,action)=>{
        state.favorite = state.favorite.filter(item=>item.id !== action.payload.id)
      }
  
    },
  })

  export const { fetchPics,deletePic,addToFavorite,removeFromFavorite } = gallerySlice.actions;
export default gallerySlice.reducer;


