import React from 'react'
import '../App.css'



const Button = ({text,size}) => {
  const Style={
    button:{
        backgroundColor: '#FF6B6B',
        color: 'white', 
        border: 'none', 
        padding: size ? size.padding :'10% 15%', 
        fontSize: '100%', 
        borderRadius: '8%',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        minWidth: '100px',
    },
}
  return (
    <div>
        <button id="btn" style={Style.button}>{text}</button>
    </div>
  )
}

export default Button