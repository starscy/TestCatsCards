import React from "react";
import "./scss/App.scss";
import axios from "axios";
import Card from "./components/Card";
import {fetchPics } from "./redux/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  const [favoriteCats,setFavoriteCats] = React.useState(false)
  const {gallery,favorite} = useSelector((state)=>state.fetchGallery)
  const dispatch = useDispatch();
   const getCats = () => {
    axios(
      "https://api.thecatapi.com/v1/images/search" )
      .then((res)=>{
        dispatch(fetchPics((res.data[0])))})
    };  

  React.useEffect(()=>{
      getCats()          
  },[])

  return (
    <div className="app">   
      <div className="container">
        <h1 className="title">Cats gallery</h1>
        <button className="filter-button" onClick={()=> setFavoriteCats(!favoriteCats)}>{!favoriteCats?"Показать только любимчиков":"Показать всех"}</button>
        <div className="gallery">
        {!favoriteCats? gallery.map((item) => <Card key={item.id} cardItem={item} />) : favorite.map((item) => <Card key={item.id} cardItem={item} />)}
        </div>   
         <button className="more" onClick={getCats}>i want more cats</button>  
      </div>
      
      <Footer />
    </div>
  )
}

export default App;
