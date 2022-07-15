import { Box, Card, CardContent, CardActions, Typography, Button, CardHeader, Stack } from "@mui/material";
import { keyframes } from '@emotion/react'
import { AboutComp } from '../slice/slice'
import { useDispatch } from 'react-redux'

export default function About() {
    const dispatch = useDispatch()
    const animation = keyframes({
        from: {
            left: "0%",
            top:"10%",
            // zIndex:0,
            opacity: 0
        },
        to: {
            opacity: 1,
            // zIndex:1,
            right:"10%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        }
    })
    const text_style={ 
        textTransform: "capitalize",
        fontSize:"1.3rem",
        color:"text.secondary"
    }
    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                animation: `${animation} 2s ease`
            }}
        >
            <Card  >
                <CardHeader title="About" titleTypographyProps={{fontSize:"2rem",fontWeight:"bold"}}></CardHeader>
                <CardContent>
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
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button

                        sx={{
                            p: 2, mx: "auto", color: "rgb(8, 31, 73)", fontSize: "1.2rem", "&:hover": {
                                textDecoration: "underline"
                            }
                        }}
                        onClick={() => dispatch(AboutComp())}
                    >Home</Button>

                </CardActions>
            </Card>
        </Box>
    )
}