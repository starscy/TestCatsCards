import {combineReducers, configureStore,} from '@reduxjs/toolkit'
import galleryReducer from './gallerySlice'

const reducers = combineReducers({
    fetchGallery: galleryReducer
  });

const store =   configureStore({
  reducer:reducers,
})

export default store