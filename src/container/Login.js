import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

function Login(props) {

    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''

    return ( 
        <div>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-6'>
                    <div className='container-fluid'>
                        <FormControl isInvalid={isError}>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input
                                id='email'
                                type='email'
                                value={input}
                                onChange={handleInputChange}
                            />
                            {!isError ? ( null
                                // <FormHelperText>
                                // Enter the email you'd like to receive the newsletter on.
                                // </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mt={4} isInvalid={isError}>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <Input
                                id='password'
                                type='password'
                                value={input}
                                onChange={handleInputChange}
                            />
                            {!isError ? ( null
                                // <FormHelperText>
                                // Enter the email you'd like to receive the newsletter on.
                                // </FormHelperText>
                            ) : (
                                <FormErrorMessage>Password is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Sign In
                        </Button>
                    </div>
                </div>
                <div className='col-6'>
                    
                </div>
            </div>
        </div>
        </div>
     );
}

export default Login;