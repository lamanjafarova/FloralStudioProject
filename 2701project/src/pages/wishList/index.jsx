import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.scss"

const WishList = ({wishList, setWishList}) => {
    const navigate = useNavigate()
    const handleRemove = (_id) => {
        let removedData = wishList.filter((a) => a._id !== _id)
        setWishList(removedData)
    }
    const handleRemoveAll = () => {
        setWishList([])
        navigate("/")
    }
  return (
    <div id='wish-list'>
        <div className="container">
            <button className='all-remove-btn' onClick={() => handleRemoveAll()}>Remove All</button>
            <div className="lists">
                {wishList.map((element) => {
                    return <div className="list">
                        <img src={element.imgUrl} alt="" className='wish-img'/>
                        <h2 className='wish-h2'>{element.name}</h2>
                        <p className='wish-price'>${element.price}</p>
                        <button className='remove-btn' onClick={() => handleRemove(element._id)}>Remove</button>
                    </div>
                })}
            </div>
        </div>

    </div>
  )
}

export default WishList