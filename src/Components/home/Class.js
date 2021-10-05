import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import physics from "../../Images/physics.jpg";



export default function Class() {
  return (
    <Container>
    <Grid container spacing={4} >
    
    <Grid item xs={4}>
  {/*  <Item> */}
   <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       component="img"
       height="140"
       src={physics}
       alt="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Course1
       </Typography>
       <Typography variant="body2" color="text.secondary">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       </Typography>
     </CardContent>
     <CardActions>
    {/*  <MuiThemeProvider theme={blueTheme}>
     <Button color="primary" variant="contained" size="small">Join</Button>
       <Button size="small" variant="contained" color="warning">Decline</Button>
     </MuiThemeProvider> */}
       
     </CardActions>
   </Card>
  {/*  </Item> */}
 </Grid>
 </Grid>
 </Container>
  );
}
