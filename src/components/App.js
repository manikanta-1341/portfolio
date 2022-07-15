import { useState } from 'react';
import { Box, Grid,  Typography } from '@mui/material'
import '../App.css';
import Skills from '../components/skills';
import {useDispatch , useSelector} from 'react-redux'
import { ProjectsComp, SkillsComp, AboutComp } from '../slice/slice'
import Projects from '../components/projects';
import About from './About';
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
          backgroundColor: "rgb(8, 31, 73)",
          minHeight:"695px",
          height:"100%",
          weight: "100vw",
          filter:skillsCompOpen || projectCompOpen || aboutCompOpen ?"blur(15px)":"" 
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
          </Grid>
        </Box>
      </Box>
      {aboutCompOpen?<About/>:<></>}
      {skillsCompOpen?<Skills/>:<></>}
      {projectCompOpen?<Projects/>:<></>}
    </>
  );
}

export default App;
