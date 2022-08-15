import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box, Card, CardContent, CardActions, Button, Typography, Stack, Divider, IconButton, Link ,
    useMediaQuery
} from "@mui/material";
import { useState } from "react";
import { keyframes } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { ProjectsComp } from '../slice/slice'
export default function Projects() {
    const dispatch = useDispatch()
    const lgScreen = useMediaQuery('(min-width:900px)')

    const link_style = {
        color: "black",
        fontWeight:"500",
        "&:hover": {
            color: "black",
            textDecoration: "underline",
        }
    }
    const heading_styles={
        fontWeight:"bold",
        fontSize:"1.2rem"
    }
    const Description_styles = {
        color: "text.secondary",
        fontFamily: "Roboto,san-serif",
        fontSize:lgScreen?"1.3rem":'1rem',
        textTransform: "capitalize"
    }
    const link_heading_styles = { 
    color: "black", 
    fontWeight:"bold",
    fontSize:lgScreen?"1.2rem":'0.875rem'
    }

    const [gmailDropDown, setGmailDropDown] = useState(false)
    const [pizzaDropDown, setPizzaDropDown] = useState(false)
    const [btDropDown, setBtDropDown] = useState(false)
    const [videoCallDropDown, setVideoCallDropDown] = useState(false)
     
    const animation = keyframes({
        from: {
            zIndex: 0,
            opacity: 0
        },
        to: {
            zIndex: 1,
            opacity: 1,

        }
    })
    const CompChange = (value) => {
        if (value === "gmail") {
            setGmailDropDown(!gmailDropDown)
            setPizzaDropDown(false)
            setBtDropDown(false)
            setVideoCallDropDown(false)
        }
        else if (value === "pizza") {
            setPizzaDropDown(!pizzaDropDown)
            setGmailDropDown(false)
            setBtDropDown(false)
            setVideoCallDropDown(false)
        }
        else if (value === "bt") {
            setBtDropDown(!btDropDown)
            setPizzaDropDown(false)
            setGmailDropDown(false)
            setVideoCallDropDown(false)
        }
        else if (value === "vc") {
            setVideoCallDropDown(!videoCallDropDown)
            setBtDropDown(false)
            setPizzaDropDown(false)
            setGmailDropDown(false)
        }

    }
    return (
        <Box>
            <Card 
            sx={{ 
                animation: useMediaQuery('(min-width:900px)')&&`${animation} 2s ease`, 
                mx: "auto", 
                position: "absolute", 
                p: lgScreen && 1, 
                textAlign: "center", 
                top: "50%", 
                left: !lgScreen ?"5%":"50%",
                right: !lgScreen && '5%',
                transform: !lgScreen ?"translate(0%,-50%)":"translate(-50%,-50%)",
                backgroundColor: "white", 
                borderRadius: "1rem" 
                }}
            >
                <CardContent sx={{p:lgScreen ? 1 : 0.75}}>
                    <Stack spacing={2}>
                        <Stack >
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography sx={heading_styles}>GMail</Typography>
                                <IconButton onClick={() => CompChange('gmail')}>
                                    {gmailDropDown ? <ArrowDropUp /> : <ArrowDropDown />}
                                </IconButton>
                            </Stack>
                            {gmailDropDown ?
                                <Box>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={Description_styles}>
                                        Desktop based application build using Electron, that can slove our daily emailing needs with simple and interative
                                        interface by which user can send,receive,mark important as starred..
                                    </Typography>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />

                                    <Typography  sx={link_heading_styles}>
                                        Github Repo's
                                    </Typography>
                                    <Stack 
                                    direction={!lgScreen &&"row"} spacing={!lgScreen && 2} justifyContent={!lgScreen && "center"}
                                    
                                    >
                                        <Link href="https://github.com/manikanta-1341/gmail.clone-frontend" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://github.com/manikanta-1341/gmail_clone.backend" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                </Box> : null}
                        </Stack>

                        <Divider sx={{ mb: 1, borderColor: "white", }} orientation="horizontal" variant="fullWidth" flexItem />

                        <Stack >
                            <Stack direction="row" justifyContent="space-between">
                                <IconButton onClick={() => CompChange('pizza')}>
                                    {pizzaDropDown ? <ArrowDropUp /> : <ArrowDropDown />}
                                </IconButton>
                                <Typography  sx={heading_styles}>Pizza's</Typography>
                            </Stack>
                            {pizzaDropDown ?
                                <Box>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={Description_styles}>
                                        Pizza ordering application with admin dashboard to get latest details of the inventory,
                                        and also razorpay is used as the payment gateway to complete the purchase.
                                    </Typography>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={link_heading_styles}>
                                        Github Repo's
                                    </Typography>
                                    <Stack direction={!lgScreen &&"row"} spacing={!lgScreen && 2} justifyContent={!lgScreen && "center"}>
                                        <Link href="https://github.com/manikanta-1341/pizza_delivery_frontend" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://github.com/manikanta-1341/pizza_delivery_backend" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={link_heading_styles}>
                                        Website Links
                                    </Typography>
                                    <Stack direction={!lgScreen &&"row"} spacing={!lgScreen && 2} justifyContent={!lgScreen && "center"}>
                                        <Link href="https://reduxpizzadelivery.netlify.app" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://redux-pizza-delivery.herokuapp.com" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                </Box> : null}
                        </Stack>

                        <Divider sx={{ mb: 1, borderColor: "white" }} orientation="horizontal" variant="fullWidth" flexItem />

                        <Stack >
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Stack direction="row" alignItems="center">
                                    <Typography sx={heading_styles} >
                                        Book Ticket
                                    </Typography>
                                    <Typography variant="h4" color="error">BT</Typography>
                                </Stack>

                                <IconButton onClick={() => CompChange('bt')}>
                                    {btDropDown ? <ArrowDropUp /> : <ArrowDropDown />}
                                </IconButton>
                            </Stack>
                            {btDropDown ?
                                <Box >
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={Description_styles}>
                                        Entertainment application that can used to search movies and book them accordingly.
                                        razorpay gateway is used for payment. we have admin dashboard so that admin control movies & theaters list..
                                    </Typography>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={link_heading_styles}>
                                        Github Repo's
                                    </Typography>
                                    <Stack direction={!lgScreen &&"row"} spacing={!lgScreen && 2} justifyContent={!lgScreen && "center"}>
                                        <Link href="https://github.com/manikanta-1341/ticket-booking-frontend" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://github.com/manikanta-1341/ticket-booking-backend" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={link_heading_styles}>
                                        Website Link's
                                    </Typography>
                                    <Stack direction={!lgScreen &&"row"} spacing={!lgScreen && 2} justifyContent={!lgScreen && "center"}>
                                        <Link href="https://redux-ticket-booking-app.netlify.app" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://redux-ticket-booking-app.herokuapp.com" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                </Box> : null}
                        </Stack>

                        <Divider sx={{ mb: 1, borderColor: "white" }} orientation="horizontal" variant="fullWidth" flexItem />

                        <Stack >
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <IconButton onClick={() => CompChange('vc')}>
                                    {videoCallDropDown ? <ArrowDropUp /> : <ArrowDropDown />}
                                </IconButton>
                                <Typography  sx={heading_styles}>
                                    VideoChat
                                </Typography>
                            </Stack>
                            {videoCallDropDown ?
                                <Box >
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={Description_styles}>
                                        One to One video chat application
                                    </Typography>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={link_heading_styles}>
                                        Github Repo's
                                    </Typography>
                                    <Stack direction={!lgScreen &&"row"} spacing={!lgScreen && 2} justifyContent={!lgScreen && "center"}>
                                        <Link href="https://github.com/manikanta-1341/videoCall-frontend" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://github.com/manikanta-1341/videoCall-backend" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography  sx={link_heading_styles}>
                                        Website Link's
                                    </Typography>
                                    <Stack direction={!lgScreen &&"row"} spacing={!lgScreen && 2} justifyContent={!lgScreen && "center"}>
                                        <Link href="https://friendly-seahorse-166aed.netlify.app" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://nodejs-videcall.herokuapp.com" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                </Box> : null}
                        </Stack>
                        <Divider sx={{ mb: 1, borderColor: "white" }} orientation="horizontal" variant="fullWidth" flexItem />


                    </Stack>
                </CardContent>
                <CardActions>
                    <Button

                        sx={{
                            p: 2, mx: "auto", color: "black", fontSize: "1.2rem", "&:hover": {
                                textDecoration: "underline"
                            }
                        }}
                        onClick={() => dispatch(ProjectsComp())}
                    >Home</Button>

                </CardActions>
            </Card>
        </Box>
    );
}