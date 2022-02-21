import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function TankYou(props) {
    return ( 
        <Box p={4} borderRadius="lg" borderWidth={'1px'} alignItems='center'>
            <Text fontSize='6xl' textAlign={'center'}>Thank You</Text>
        </Box>
     );
}

export default TankYou;