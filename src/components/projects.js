import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box, Card, CardContent, CardActions, Button, Typography, Stack, Divider, IconButton, Link } from "@mui/material";
import { useState } from "react";
import { keyframes } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { ProjectsComp } from '../slice/slice'
export default function Projects() {
    const dispatch = useDispatch()
    const link_style = {
        color: "white",
        "&:hover": {
            color: "white",
            textDecoration: "underline",
        }
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
    const [currentComp, setCurrentComp] = useState(null)
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
            <Card sx={{ animation: `${animation} 2s ease`, mx: "auto", position: "absolute", p: 1, textAlign: "center", top: "50%", left: "50%", transform: "translate(-50%,-50%)", backgroundColor: "#4d5277", borderRadius: "1rem" }}>
                <CardContent>
                    <Stack spacing={2}>
                        <Stack >
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography variant="h4">GMail</Typography>
                                <IconButton onClick={() => CompChange('gmail')}>
                                    {gmailDropDown ? <ArrowDropUp /> : <ArrowDropDown />}
                                </IconButton>
                            </Stack>
                            {gmailDropDown ?
                                <Box>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography variant="h6" sx={{ color: "white", fontFamily: "Roboto,san-serif", textTransform: "capitalize" }}>
                                        Desktop based application build using Electron, that can slove our daily emailing needs with simple and interative
                                        interface by which user can send,receive,mark important as starred..
                                    </Typography>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />

                                    <Typography variant="h5" sx={{ color: "black" }}>
                                        Github Repo's
                                    </Typography>
                                    <Stack>
                                        <Link href="https://github.com/manikanta-1341/gmail.clone-frontend" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://github.com/manikanta-1341/gmail_clone.backend" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                </Box> : null}
                        </Stack>

                        <Divider sx={{ mb: 1, borderColor: "white",  }} orientation="horizontal" variant="fullWidth" flexItem />
                            
                        <Stack >
                            <Stack direction="row" justifyContent="space-between">
                                <IconButton onClick={() => CompChange('pizza')}>
                                    {pizzaDropDown ? <ArrowDropUp /> : <ArrowDropDown />}
                                </IconButton>
                                <Typography variant="h6">Pizza's</Typography>
                            </Stack>
                            {pizzaDropDown ?
                                <Box>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography variant="h6" sx={{ fontFamily: "Roboto,san-serif", color: "white", textTransform: "capitalize" }}>
                                        Pizza ordering application with admin dashboard to get latest details of the inventory,
                                        and also razorpay is used as the payment gateway to complete the purchase.
                                    </Typography>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography variant="h5" sx={{ color: "black" }}>
                                        Github Repo's
                                    </Typography>
                                    <Stack>
                                        <Link href="https://github.com/manikanta-1341/pizza_delivery_frontend" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://github.com/manikanta-1341/pizza_delivery_backend" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography variant="h5" sx={{ color: "black" }}>
                                        Website Links
                                    </Typography>
                                    <Stack>
                                        <Link href="https://reduxpizzadelivery.netlify.app" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://redux-pizza-delivery.herokuapp.com" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                </Box> : null}
                        </Stack>

                        <Divider sx={{ mb: 1, borderColor: "white" }} orientation="horizontal" variant="fullWidth" flexItem />

                        <Stack >
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Stack direction="row" alignItems="center">
                                    <Typography variant="h5">
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
                                    <Typography variant="h6" sx={{ fontFamily: "Roboto,san-serif", color: "white", textTransform: "capitalize" }}>
                                        Entertainment application that can used to search movies and book them accordingly.
                                        razorpay gateway is used for payment. we have admin dashboard so that admin control movies & theaters list..
                                    </Typography>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography variant="h5" sx={{ color: "black" }}>
                                        Github Repo's
                                    </Typography>
                                    <Stack>
                                        <Link href="https://github.com/manikanta-1341/ticket-booking-frontend" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://github.com/manikanta-1341/ticket-booking-backend" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography variant="h5" sx={{ color: "black" }}>
                                        Website Link's
                                    </Typography>
                                    <Stack>
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
                                <Typography variant="h5">
                                    VideoChat
                                </Typography>
                            </Stack>
                            {videoCallDropDown ?
                                <Box >
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography variant="h6" sx={{ fontFamily: "Roboto,san-serif", color: "white", textTransform: "capitalize" }}>
                                        One to One video chat application
                                    </Typography>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography variant="h5" sx={{ color: "black" }}>
                                        Github Repo's
                                    </Typography>
                                    <Stack>
                                        <Link href="https://github.com/manikanta-1341/videoCall-frontend" target="_blank" underline="none" sx={link_style}>Client Side</Link>
                                        <Link href="https://github.com/manikanta-1341/videoCall-backend" target="_blank" underline="none" sx={link_style}>Server Side</Link>
                                    </Stack>
                                    <Divider sx={{ mb: 1, color: "black" }} orientation="horizontal" variant="fullWidth" flexItem />
                                    <Typography variant="h5" sx={{ color: "black" }}>
                                        Website Link's
                                    </Typography>
                                    <Stack>
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
                            p: 2, mx: "auto", color: "white", fontSize: "1.2rem", "&:hover": {
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