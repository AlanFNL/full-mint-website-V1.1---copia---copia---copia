import React, { useRef } from 'react'
import {Box, Flex, Container, Grid,  Heading, SlideFade} from '@chakra-ui/react'

import mileniumlogo from '../assets/milenium.png'
import reforlogo from '../assets/refor.png';

import './Team.css'
import { useInViewport } from 'react-in-viewport'



function Team() {

  const ref = useRef(null);
  const { inViewport } = useInViewport(
      ref,
      {rootMargin: "-200px"},
      { disconnectOnLeave: false},
      {}
  );



    return (
      <section className='App-team' id='team'>
      <Flex justify="space-between" align="center" paddingLeft={5}>
      <Container maxW="container.xl" mt={10} ref={ref}>
      <SlideFade in={inViewport} offsetY='20px' delay={0.4}>
      <Heading align="center" as="h3" size="1g" pb="2" fontSize="30px">Conocé al Team</Heading>
      </SlideFade>
          <Grid templateColumns="repeat(6, 2fr)" paddingLeft="200" paddingRight="50" gap={6}>

          <Box position="absolute" right="200">
        
    <div className='card'>
      <div className='circle' >
        <img src={reforlogo} className="logo" alt='reforcelogo1'/>
      </div>
      <div className='content' >
        <h2>Reforce Infinity</h2>
        <p>Los mejores coleccionables de la galaxia.</p>
        <a href='#'>Explorá</a>
      </div>
      <img src={reforlogo} className="inside_logo" alt='reforlogo2'/>
    </div>
 
    </Box>

   <Box position="absolute" left="200" paddingBottom="500">
   
    <div className='card' >
      <div className='circle' >
        <img src={mileniumlogo} className="logo" alt='reforcelogo1'/>
      </div>
      <div className='content' >
        <h2>Milenium Group</h2>
        <p>El grupo del milenio.</p>
        <a href='#'>Explorá</a>
      </div>
      <img src={mileniumlogo} className="inside_logo" alt='reforlogo4'/>
    </div>
    </Box>
  
             

          </Grid>
        
      </Container>

      </Flex>

            
      </section>
    )
}



export default Team;