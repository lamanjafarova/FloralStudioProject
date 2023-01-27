import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"

const Details = () => {
    const [detail, setDetail] = useState([])
    const { _id } = useParams()
    const getData = async() => {
        let response = await axios.get(`http://localhost:8080/flower/${_id}`)
        setDetail(response.data)
    }
    useEffect(() => {
        getData()
    }, [])
const navigate = useNavigate()
const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/flower/${_id}`)
    navigate("/")
}
  return (
    <div id='details'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{detail.name}</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="container">
            <div className="details">
                <div className="detail">
                    <img src={detail.imgUrl} alt="" className='detail-img'/>
                    <h3 className='detail-h3'>{detail.name}</h3>
                    <p className='detail-p'>${detail.price}</p>
                    <div className="btn">
                    <button className='detail-btn-back' onClick={() => navigate("/")}>Back</button>
                    <button className='detail-btn-del' onClick={() => handleDelete(detail._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Details