import React from 'react';
import background from '../../assets/backgroundpic.png';
import './styles.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import NewsCards from '../../components/NewsCard/NewsCards';
import ContentButton from '../../components/ContentButton/ContentButton';
import AcrticleThumbnail from '../../components/ArticleThumbnail/AcrticleThumbnail';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// temp information to be removed 
const buttonList = ["PS4", 'PS5', "XBOX ONE", "XBOX SERIES X", "SWITCH" ];
const articles = ['Elden Ring to hard for leftist?', 'Why is Cat Woman black?', 'We love the new Pokemon starters!'];


const MainPage = () => {
  return (
    <div  className='mainContainer'>
     
     <h1 className='title'>Top News</h1>

     <div>

    <Grid container columnSpacing={2} rowSpacing={2} pl={1} pr={1}>
      <Grid item xs={12} md={3}>
        <Paper><NewsCards source={'https://www.stevensegallery.com/400/400'} /></Paper>
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

     <div style={{width:'100%', height:'2px', backgroundColor:'black', marginTop: '200px'}}></div>

     <div style={{ display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px' }}>
     <Stack spacing={2} direction="row"> 
        {buttonList.map(name => <ContentButton title={name}/>)}
        </Stack>


       
     </div>

     <div style={{ display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px' }}>
                      
     <div>
       {
         articles.map(title =>  <AcrticleThumbnail source={'https://www.placecage.com/300/300'} title={title} /> )
       }
    
      
     </div>

    </div>
  
     
     </div>
  )
}

export default MainPage