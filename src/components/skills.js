
import { Box, Card, CardContent,  Typography, Button, Grid, CardActions } from "@mui/material";
import { keyframes } from '@emotion/react'
import { useDispatch } from "react-redux";
import { SkillsComp } from "../slice/slice";

export default function Skills() {
    const dispatch = useDispatch()
    const img_styles = {
        textAlign: "center"
    }
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
        dispatch(SkillsComp())
    }
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    animation: `${animation} 2s ease`
                }}
            >
                <Card sx={{ backgroundColor: "#b6b6b670" }} >
                    <CardContent >
                        <Box sx={{ p: "5px" }}>
                            <Grid container rowSpacing={3} alignItems="center" mt={2} >
                                <Grid item xs={4} sx={img_styles}>
                                    <img
                                        width="75px"
                                        height="75px"
                                        alt="html_image"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                                    />
                                </Grid>
                                <Grid item xs={4} sx={img_styles}>
                                    <img
                                        width="65px"
                                        height="75px"
                                        alt="Css_image"
                                        src="https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png"
                                        sx={{ width: 36, height: 36 }}
                                    />
                                </Grid>
                                <Grid item xs={4} sx={img_styles}>
                                    <img
                                        width="65px"
                                        height="65px"
                                        alt="Js_image"
                                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                    />
                                </Grid>
                                <Grid item xs={4} sx={img_styles}>
                                    <img
                                        width="75px"
                                        height="75px"
                                        alt="React_image"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
                                </Grid>
                                <Grid item xs={4} sx={img_styles}>
                                    <Typography variant="h4">express</Typography>
                                </Grid>
                                <Grid item xs={4} sx={img_styles}>
                                    <img
                                        width="75px"
                                        height="75px"
                                        alt="nodeJs_image"
                                        src="https://nodejs.org/static/images/logo.svg"
                                    />
                                </Grid>
                                <Grid item xs={4} sx={img_styles}>
                                    <img
                                        width="130px"
                                        height="100px"
                                        alt="Mongodb_image"
                                        src="https://res.cloudinary.com/bigbang/image/upload/v1644955705/2560px-MongoDB_Logo.svg_hugqcc.png"
                                    />
                                </Grid>

                            </Grid>
                        </Box> 
                    </CardContent>
                    <CardActions>
                        <Button
                            
                            sx={{ p: 2, mx: "auto", color:"white", fontSize: "1.2rem","&:hover":{
                                textDecoration:"underline"
                            } }}
                            onClick={() => Homebtn()}
                        >Home</Button>

                    </CardActions>
                </Card>
            </Box>
        </>
    );
}