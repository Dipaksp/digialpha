import React, { useState } from 'react'
import banner from './bannerImage.png'
import Button from '../../Button'
import '../../../Style/banner.css'

const arr=[banner,banner,banner]

function Banner() {
    const [current,setCurrent]=useState(0)
    const [timer,setTimer]=useState(false)
    let id
    if(timer){
       id=setInterval(()=>{
            setCurrent(current>0 ? current-1 : 0)
        },3000)
    }
    else{
        clearInterval(id)
    }

  return (
    <div className="banner" onMouseEnter={()=>setTimer(true)}
        onMouseLeave={()=>setTimer(false)}
        style={{width:window.innerWidth}}
    >   
        <div className="banner-content">

        {arr.length>0 && <img className="banner-image" src={arr[current]} alt='banner' /> }

        <div className="banner-button">
            <Button text={"Register"} size={{padding:"15% 20%"}}/>
        </div>
        
        </div>
        
    </div>
  )
}

export default Banner;
