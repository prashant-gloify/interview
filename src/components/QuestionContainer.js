import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import QuestionField from './QuestionField';
import VideoRecorder from './VideoRecorder';

function QuestionContainer(props) {
    return ( 
        <Box w={'full'} p={4} borderRadius='lg' borderWidth={'1px'}>
            <Box>
                <Grid templateColumns='repeat(2, 1fr)'>
                    <GridItem>
                        <Text fontSize='2xl'>Question</Text>
                    </GridItem>
                    <GridItem>
                        <Text fontSize='xl' textAlign={'end'} color='green.500'>Time Remaining : {props.timeRemaining} min</Text>
                    </GridItem>
                </Grid>
            </Box>
            
            <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem w={'100%'} display='flex' justifyContent={'space-between'} flexDirection='column'>
                    <QuestionField question={props.question} questionNumber={props.questionNumber}></QuestionField>
                    
                    <Box>
                        <Button color={'blue.500'} >Previous</Button>
                        <Button color={'blue.500'} mx='2'>Next</Button>
                        <Button color={'green.500'} hidden={false} mx='2'>Submit this question</Button>
                    </Box>
                </GridItem>
                <GridItem w={'100%'}>
                    <VideoRecorder></VideoRecorder>
                </GridItem>
            </Grid>
        </Box>
     );
}

export default QuestionContainer;