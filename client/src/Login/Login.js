import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import './Login.css'

const AUTH_URL="https://accounts.spotify.com/authorize?client_id=a870774ba0f54cca924fba0d0a4f23f1&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


const Login=() =>{
    return (
        // <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh" , backgroundColor:"darkgreen"}}>
        //     <a className="btn btn-outline-success btn-lg mx-2" href={AUTH_URL}>Login With Spotify</a>
        // </Container>
        
    <Container>
    <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#" style={{color: "green"}}>Spotify 2.0</Navbar.Brand>
    </Navbar>

    <Container className="d-flex justify-content-start align-items-center" style={{minHeight:"100vh"}}>
        <a className="btn btn-outline-success btn-lg mx-2" href={AUTH_URL}>Login With Spotify</a>
    </Container>
    </Container>

    


    )
}

export default Login;
