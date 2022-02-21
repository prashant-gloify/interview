import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function QuestionField(props) {
    return ( 
        <Box p={2} borderRadius={'lg'} w={'full'}>
            <Text>
                {props.questionNumber}. {props.question}
            </Text>
        </Box>
     );
}

export default QuestionField;