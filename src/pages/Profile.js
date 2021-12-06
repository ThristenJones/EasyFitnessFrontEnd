import {Col, Row, Container} from 'react-bootstrap';
import UserGoals from '../userGoals/userGoals';
import UserDiary from '../userDiary/userDiary';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Profile = (props) => {
console.log("profile", props.user);

const theme = createTheme();

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
    return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
         
          <Typography variant="h6" color="inherit" noWrap>
            STORIES
          </Typography>
        </Toolbar>
      </AppBar>
        <div>
            <h3>Here are you're daily logs {props.user.name}...</h3>
            <Container>
            <Row>
                <Col><UserGoals user={props.user}/></Col>
                <Col><UserDiary user={props.user}/></Col>
                <Col></Col>
    
            </Row>
            </Container>
        </div>
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
        </ThemeProvider>
    )
}

export default Profile;