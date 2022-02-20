import React from 'react';
import background from '../../assets/backgroundpic.png';
import './styles.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NewsCards from '../../components/NewsCard/NewsCards';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MainPage = () => {
  return (
    <div  className='mainContainer'>
     
     <h1 className='title'>Top News</h1>

     <div>

    <Grid container columnSpacing={2} rowSpacing={2} pl={1} pr={1}>
      <Grid item xs={12} md={3}>
        <Paper><NewsCards source={'https://www.stevensegallery.com/300/300'} /></Paper>
      </Grid>
      <Grid item xs={12}  md={3}>
        <Paper><NewsCards source={'https://www.placecage.com/300/300'} /></Paper>
      </Grid>
      <Grid item  xs={12} md={3}>
        <Paper><NewsCards source={'https://www.fillmurray.com/300/300'} /></Paper>
      </Grid>
      <Grid item xs={12}  md={3}>
        <Paper><NewsCards source={'https://placebeard.it/300x300'} /></Paper>
      </Grid>
    </Grid>

     </div>

   
     
     </div>
  )
}

export default MainPage