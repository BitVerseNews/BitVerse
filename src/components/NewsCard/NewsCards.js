import React from 'react'
import './styles1.css'
import test from './test.js';


const NewsCards = ({source}) => {
  return (
    <div className='container'>
      <img className='imgContainer' src={source} alt="new"/>

<div className='headLineTitle'>
   <h3 style={{ opacity:1000, color:'white'}} >Woke women are bad</h3>
</div>
     
      
    
    </div>
  )
}

export default NewsCards