import React, { useRef} from 'react';
import { useForm } from 'react-hook-form';

import { Box, Spacer, Button, Select, Heading, Center, VStack, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, useDisclosure} from '@chakra-ui/react';

export default function AddStoryPage () {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const [display, setDisplay] = React.useState('none');
   
     
   
    const onSubmit = (values) => {
        console.log(values)
        alert("JAJA")
        
    }

   

    return (
      <Box color="red" marginTop="1000" >
        <Center>
        <VStack maxWidth={600}>
            <Heading >Contactanos</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
      
            <FormControl isRequired marginBottom='10'>
          <FormLabel htmlFor='email'>Dirección de email</FormLabel>
            <Input backgroundColor='white' color='black' id='email' name='email' {...register("email", { required: true}) }/>
          <FormHelperText>Nunca compartiremos tu E-mail.</FormHelperText>
            </FormControl>

            <FormControl isRequired marginBottom='10'>
          <FormLabel htmlFor='title'>Nombre completo</FormLabel>
            <Input backgroundColor='white' color='black' placeholder='Introduce un título...'id='name' name='name' {...register("name", { required: true, }) }/>
            </FormControl>

            

            <FormControl  isRequired marginBottom='10'>
          <FormLabel  htmlFor='description'>Descripción</FormLabel>
            <Input height='100' backgroundColor='white' color='black' align='center' placeholder='¿Qué necesitas en concreto?' id='description' name='description' {...register("description", { required: true,}) }/>
            </FormControl>


            {errors.exampleRequired && <span>This field is required</span>}

            <Button type="submit"
              backgroundColor="#3C17B5"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="0 15px"
              
              onClick={(onSubmit) => setDisplay('')}
               >Envíar</Button>

               <Alert  status='success'
  variant='solid'
  alignItems='center'
  textAlign='center'
  height='200px' display={display}>
                <AlertIcon boxSize='40px' mr={0}/>
                    <AlertTitle mt={4} mb={1} fontSize='lg'>Enviado</AlertTitle>
                    <AlertDescription maxWidth='sm'>Su mensaje se ha enviado correctamente.</AlertDescription>
                    <CloseButton position='absolute' right='8px' top='8px' />
               </Alert>

       
        </form>
        <Spacer paddingBottom="15"/>
                  
                  <Spacer />
        </VStack>
        </Center>
        
        </Box>
    )
}