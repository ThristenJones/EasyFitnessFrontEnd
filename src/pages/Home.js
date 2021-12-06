import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react'
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        EasyFitness
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
  
}


const theme = createTheme();

export default function Food(props) {

    const [foodSearch, setFoodSearch] = useState  ([]);
    const [searchedFood, setSearchedFood] = useState ('');
    
  
    const handleChange = (event) => {
        setSearchedFood(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
     
      axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchedFood}&api_key=qK85dP8zS3gbWl0j9UmOre29XV9mwy4EdMuhCSIJ`)
     .then(response => {
        setFoodSearch(response.data.foods)      
        console.log(response.data.foods)
    })
  }
 
  const handleClick =( name, servingSize, protein, fats, sugars, calories) => {
    const food = {
    name: name,
    servingSize: servingSize,
    protein: protein,
    fats: fats,
    sugars: sugars,
    calories: calories

    }
    console.log(food)
    axios.post(`http://localhost:5000/api/users/foods/${props.user._id}`,food)
  }
   
    
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
         
          <Typography variant="h6" color="inherit" noWrap>
            Food Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to Easy Fitness
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We know we all love to eat but also stay fit and look good for summer as well.
              This app has a solution for both those problems. Join in on Easy Fitness and
              enjoy while also knowing what is going in your body as well!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
          </Container>
          <form class="d-flex" onSubmit = {handleSubmit}>
        <input class="form-control me-2" type="search" placeholder="Search for a food..." aria-label="Search" onChange = {handleChange}/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
        
              <Grid item xs={12} sm={6} md={4}>
              {foodSearch.map(food => {
                return(
                  
                  <ul>
                    <hr/>
                    <li>
                  Name: {food.description}
                </li>
                  <li>
                  Serving size: {food.servingSize}{food.servingSizeUnit}
                </li>
                <li>
                  Protein: {food.foodNutrients[0].nutrientNumber}
                </li>
                <li>
                  Fats: {food.foodNutrients[1].nutrientNumber}
                </li>
                <li>
                  Sugars: {food.foodNutrients[4].nutrientNumber}
                </li>
                <li>
                  Calories: {food.foodNutrients[3].nutrientNumber}     
                </li>
                
                <button class="btn btn-primary" type="button" onClick = {()=>handleClick(food.description, food.servingSize, food.foodNutrients[0].nutrientNumber, food.foodNutrients[1].nutrientNumber, food.foodNutrients[4].nutrientNumber, food.foodNutrients[3].nutrientNumber )}>Add food</button>
                </ul>
              )})}
              
                
              </Grid>
            
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          @EasyFitness
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          WE HOPEE YOU ENJOY THE SITE!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}