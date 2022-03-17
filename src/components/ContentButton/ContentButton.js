import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { grey } from '@mui/material/colors';
import './containerButtonStyle.css'
const ContentButton = ({title}) => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[700],
          },
        width: "200px",
        height:"50px",
        borderRadius: 100
        
      }));

   
  return (

    <div >
   
    
   <ColorButton variant="contained">{title}</ColorButton>
    
  </div>
  )
}

export default ContentButton