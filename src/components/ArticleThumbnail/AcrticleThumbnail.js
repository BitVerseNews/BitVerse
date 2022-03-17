import { borderBottom } from '@mui/system'
import React from 'react'

const AcrticleThumbnail = ({source, title}) => {
  return (
    <div style={{ display: 'flex', backgroundColor:'white', height:'180px', marginBottom:'10px', width:'600px', borderWidth:100 }}>
         <img  src={source} alt="new"/>

         <div style={{paddingLeft:'10px'}}>
           <h3>{title} </h3>
           <p></p>
         <p>by swangmaster420</p> </div>
         

    </div>
  )
}

export default AcrticleThumbnail