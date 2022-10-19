import React from "react";
import {Image, Box, Flex} from "@chakra-ui/react";
import refor3 from '../assets/Reforce3.png'
import 'animejs'
import anime from "animejs/lib/anime.es.js"
import '../HeroSection/Hero.css'




function Hero() {
    
   
   
    return (

        <Flex justify="center" align="center" >
            <Box width={1000}>
                <div>
                <Image className="reforceHeaderText" src={refor3}  />
               
              

            </div>
            

    

            </Box>
            
        </Flex>



    )
    
   
    
}

export default Hero;