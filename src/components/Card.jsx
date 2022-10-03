import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addToFavorite, deletePic, removeFromFavorite } from '../redux/gallerySlice'

const Card = ({ cardItem }) => {
    const [like,setLike]=React.useState(false)
    const dispatch = useDispatch()
    const buttonRef = useRef(null)
    const deleteCatImage = (id)=> {
        dispatch(deletePic(id))
    }

    const likeThisCat = (cardItem)=>{
        setLike(!like);
        buttonRef.current.innerHTML==="Like"? dispatch(addToFavorite(cardItem)):dispatch(removeFromFavorite(cardItem))      
    }
    
    return (
       
        <div className="card" >
            <img src={cardItem.url} alt={cardItem.url} />
            <div className='card-description'>
                <p>Ссылка на файл </p>
                <p > {cardItem.url}</p>
            </div>
            <div className='card-buttons'>
                <button className='card-delete' onClick={()=>deleteCatImage(cardItem.id)}>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>
                </button>
            <button ref = {buttonRef} className={like ? "like-button-liked":"like-button" } onClick={()=>likeThisCat(cardItem)}>
               {like?"Deslike":"Like"} 
            </button>
            </div>
        </div>
    )
}

export default Card