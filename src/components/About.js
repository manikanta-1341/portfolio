import { Box, Card, CardContent, CardActions, Typography, Button, CardHeader, Stack, 
    useMediaQuery ,Grid
} from "@mui/material";
import { keyframes } from '@emotion/react'
import { AboutComp } from '../slice/slice'
import { useDispatch } from 'react-redux'

export default function About() {
    const dispatch = useDispatch()
    const lgScreen = useMediaQuery('(min-width:900px)')
    const animation = keyframes({
        from: {
            left: "0%",
            top: "10%",
            // zIndex:0,
            opacity: 0
        },
        to: {
            opacity: 1,
            // zIndex:1,
            right: "10%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        }
    })
    const text_style = {
        textTransform: "capitalize",
        fontSize: useMediaQuery('(min-width:500px)')?"1.3rem":'1.1rem',
        color: "text.secondary"
    }
    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "10%",
                right: "10%",
                transform: "translate(0%,-50%)",
                animation: lgScreen && `${animation} 2s ease`
            }}
        >
            <Card  >
                <CardHeader title="About" titleTypographyProps={{ fontSize: "2rem", fontWeight: "bold" }}></CardHeader>
                <CardContent>
                    {/* <Stack spacing={2}>  */}
                    <Stack spacing={2}>
                        <Typography sx={text_style}>
                            Hi! My name is Medicharla Manikanta, Currently, I'm open to work.
                            I'm looking forward to working with a company that helps me to grow my career and
                            dive through new technologies in the industry.
                        </Typography>
                        <Typography sx={text_style}>
                            In my free time,
                            I like to play Electronic Games And Watch animes/web series,
                        </Typography>
                        <Typography sx={text_style}>
                            for more details, you can refer to my resume
                        </Typography>
                    </Stack>
                    {/* </Stack> */}
                </CardContent>
                <CardActions>
                    <Grid container alignItems="center">
                        <Grid item xs={6} md={12} >

                            <Stack>
                                <Box sx={{ mx: "auto" }}>
                                    <Button component="a" href="https://drive.google.com/file/d/1FIdT7q5hLGeT2uljKd84hZADw7U6pAqV/view?usp=sharing" underline="none"
                                        download rel="noopener noreferrer"
                                        sx={{
                                            color: "rgb(8, 31, 73)", fontSize: "1.2rem", "&:hover": {
                                                color: "rgb(8, 31, 73)"
                                            }
                                        }}>Resume</Button>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={12} sx={{textAlign: 'center'}}>
                            <Button

                                sx={{
                                    p: 2, mx: "auto", color: "rgb(8, 31, 73)", fontSize: "1.2rem", "&:hover": {
                                        textDecoration: "underline"
                                    }
                                }}
                                onClick={() => dispatch(AboutComp())}
                            >Home</Button>
                        </Grid>
                    </Grid>

                </CardActions>
            </Card>
        </Box>
    )
}