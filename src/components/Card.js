import React from 'react'
import '../Style/card.css'

const Card = ({item}) => {
    console.log(item)
  return (
    <div className="card-container">
            <img src={item.img} alt="Background" className="background-image"/>
            <div className="contents">
                <p>{item.text}</p>
                <span>Readmore →</span>
            </div>
        </div>

   
  )
}

export default Card