import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

const FlowersCards = ({wishList, setWishList}) => {
    const [flowers, setFlowers] = useState([])
    const [toggle, setToggle] = useState([])
    const getData = async() => {
        let response = await axios.get("http://localhost:8080/flower")
        setFlowers(response.data)
    }
    useEffect(() => {
        getData()
    }, [])

    const handleSearch = (e) => {
        axios.get("http://localhost:8080/flower")
        .then((response) => {
            let searchedData = response.data.filter((el) => el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
            setFlowers(searchedData)
        })
    }
    const handleSort = () => {
        setToggle(!toggle)
        if(toggle){
            let sortedPrice = flowers.sort((a, b) => a.price - b.price)
            setFlowers([...sortedPrice])
        } else{
            getData()
        }
    }
    const handleDelete = (_id) => {
        axios.delete(`http://localhost:8080/flower/${_id}`)
        let deletedData = flowers.filter((elem) => elem._id !== _id)
        setFlowers(deletedData)
    }
    const handleAdd = (obj) => {
        if(!wishList.find((a) => a._id === obj._id)){
            setWishList([...wishList, obj])
        } else{
            window.alert("Add Already")
        }
    }
  return (
    <div id='flower'>
        <div className="container">
            <h6 className='cards-h6'>Devoted to wonderful beauty</h6>
            <h1 className='cards-h1'>Flowers Pricing</h1>
           <div className="search-sort">
           <input className='search-input' type="text" placeholder='Search by Name' onChange={(e) => handleSearch(e)}/>
            <button className='sort-btn' onClick={() => handleSort()}>Sort by Price</button>
           </div>
            <div className="cards">
                {flowers.map((element) => {
                    return <div className="card">
                        <Link to={`/home/${element._id}`}><img src={element.imgUrl} alt="" className='card-img'/></Link>
                        <h4 className='card-h4'>{element.name}</h4>
                        <p className='card-p'>${element.price}</p>
                        <div className="del-add">
                        <button className='del-btn' onClick={() => handleDelete(element._id)}><i className="fa-solid fa-trash"></i></button>
                        <button className={(wishList.find((q) => q._id === element._id)) ? "add" : "not-add"} onClick={() => handleAdd(element)}>{(wishList.find((a) => a._id === element._id)) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</button>
                        </div>
                    </div>
                })}
            </div>
        </div>

    </div>
  )
}

export default FlowersCards