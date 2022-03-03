import React from 'react'
import './styles1.css'
import test from './test.js';


const NewsCards = ({source}) => {
  return (
    <div className='container'>
      <img className='imgContainer' src={source} alt="new"/>

<div className='headLineTitle'>
</div>
     
   <h3 style={{  paddingLeft:10,position: 'absolute',zIndex:1,color:'white',  bottom: '1%'}} >Woke women are bad</h3>
      
    
    </div>
  )
}

export default NewsCards