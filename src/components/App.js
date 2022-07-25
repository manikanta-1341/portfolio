import { Box, Grid,  Typography } from '@mui/material'
import '../App.css';
import Skills from '../components/skills';
import {useDispatch , useSelector} from 'react-redux'
import { ProjectsComp, SkillsComp, AboutComp,ContactComp } from '../slice/slice'
import Projects from '../components/projects';
import About from './About';
import Contact from './contact';

function App() {
  const Atag_styles = {
    textDecoration:"none",
    color:"inherit",
    "&:hover":{
      color:"inherit",
      fontSize:'18px',
      borderBottom:"2px solid white",
    }
  }
  
  const dispatch = useDispatch()
  const aboutCompOpen = useSelector(state=>state.aboutCompOpen)
  const skillsCompOpen = useSelector(state=>state.skillsCompOpen)
  const projectCompOpen = useSelector(state=>state.projectCompOpen)
  const contactCompOpen = useSelector(state=>state.contactCompOpen)
 
  const handleComp = (e)=>{ 
    switch (e.target.innerText) {
      case "About":{
        dispatch(AboutComp())
        break;
      }
      case "Skills":{
        dispatch(SkillsComp())
        break;
      }
      case "Projects":{
        dispatch(ProjectsComp())
        break;
      }
      case "Contact Me":{
        dispatch(ContactComp())
        break;
      }
    
      default:
        break;
    }
  }
  return (
    <>
      <Box
        sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          color: "white",
          background:`url(https://cdn.pixabay.com/photo/2015/07/28/22/01/office-865091_960_720.jpg)`,
          backgroundPosition:"center",
          backgroundSize:"cover",
          minHeight:"100vh",
          height:"100%",
          filter:skillsCompOpen || projectCompOpen || aboutCompOpen || contactCompOpen ?"blur(15px)":"" 
        }
        }
      >
        <Box
          sx={{ textAlign: "center" }}
        >
          <Typography variant="h3">Medicharla Manikanta</Typography>
          <Typography variant="h5">Full Stack Devloper</Typography>
        </Box>
        <Box
        sx={{mt:"1rem"}}
        >
          <Grid
            container
            justifyContent="center"
            spacing={8}
          >
            <Grid item >
              <Typography component="a"
                sx={Atag_styles}
                onClick={(e)=>handleComp(e)}
              >About</Typography>
            </Grid>
            <Grid item >
              <Typography component="a"
              sx={Atag_styles}
              onClick={(e)=>handleComp(e)}
              >Skills</Typography>
            </Grid>
            <Grid item >
              <Typography component="a"
              sx={Atag_styles} 
              onClick={(e)=>handleComp(e)}
              >Projects</Typography>
            </Grid>
            <Grid item >
              <Typography component="a"
              sx={Atag_styles} 
              onClick={(e)=>handleComp(e)}
              >Contact Me</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {aboutCompOpen?<About/>:<></>}
      {skillsCompOpen?<Skills/>:<></>}
      {projectCompOpen?<Projects/>:<></>}
      {contactCompOpen?<Contact/>:<></>}
    </>
  );
}

export default App;
