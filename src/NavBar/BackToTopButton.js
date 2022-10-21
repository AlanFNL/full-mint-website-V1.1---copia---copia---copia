import React, { useRef } from 'react'
import {Box, ScaleFade, Image} from '@chakra-ui/react'
import {useState, useEffect} from 'react';
import { useInViewport } from 'react-in-viewport'
import ReforceLogo from '../assets/Reforce2.png'
import './NavBar.css'


function BackToTopButton() {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY >= 0) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "100px"},
        { disconnectOnLeave: false},
        {}
    );



    return <div >
   
    
    <Box
    className='reforLogo'
     left= "200px"
     width="300px"
     height="100%"
     position="fixed"
     top="-95px"
     
     
     
     
     
     ref={ref}> 
     <ScaleFade initialScale={0.5} in={inViewport} delay={1}>
     {BackToTopButton && (
        
        <Image className='reforLogo' cursor="pointer" src={ReforceLogo} boxSize="285px" margin="0 15px"  onClick={scrollUp}/>
   
        
   
     )}
     
     </ScaleFade>
     </Box>
     
  </div>
  

}

export default BackToTopButton