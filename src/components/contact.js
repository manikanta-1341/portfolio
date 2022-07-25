import { Box, Card, Stack, CardContent, CardActions, Button } from "@mui/material";
import { keyframes } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { ContactComp } from '../slice/slice'
export default function Contact() {
    const dispatch = useDispatch()
    const animation = keyframes({
        from: {
            left: "10%",
            opacity: 0
        },
        to: {
            opacity: 1,
            left: "50%",
            transform: "translate(-50%,-50%)"
        }
    })
    const Homebtn = () => {
        dispatch(ContactComp())
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
            <Card>
                <CardContent>
                    <Stack>
                        <Button sx={{fontSize:"1.5rem", color:"rgb(8, 31, 73)"}} component="a" href="mailto: medicharlamanikanta13@gmail.com" underline="none">EMail</Button>
                        <Button sx={{fontSize:"1.5rem", color:"rgb(8, 31, 73)"}}  component="a" href="https://github.com/manikanta-1341" underline="none">Github Profile</Button>
                        <Button sx={{fontSize:"1.5rem", color:"rgb(8, 31, 73)"}}  component="a" href="https://www.linkedin.com/in/medicharla-manikanta-ba5576192/" underline="none">Linkedin Profile</Button>
                    </Stack>
                </CardContent>
                <CardActions>
                <Button
                            
                            sx={{ p: 2, mx: "auto", color:"rgb(8, 31, 73)", fontSize: "1.2rem","&:hover":{
                                textDecoration:"underline"
                            } }}
                            onClick={() => Homebtn()}
                        >Home</Button>
                </CardActions>
            </Card>
        </Box>
    )
}