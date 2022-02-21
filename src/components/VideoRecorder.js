import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import 'video.js/dist/video-js.min.css';
import 'videojs-record/dist/css/videojs.record.css';
import videojs from 'video.js';
import RecordRTC from 'recordrtc';
import Record from 'videojs-record/dist/videojs.record.js';


function VideoRecorder(props) {
    useEffect(() => {
        var options = {
            controls: true,
            bigPlayButton: false,
            width: 600,
            height: 500,
            fluid: true,
            plugins: {
                record: {
                    audio: true,
                    video: true,
                    maxLength: 10,
                    debug: true
                }
            }
        };
        
        // apply some workarounds for opera browser
        // applyVideoWorkaround();
        
        let player = videojs('myVideo', options, function() {
            // print version information at startup
            let msg = 'Using video.js ' + videojs.VERSION +
                ' with videojs-record ' + videojs.getPluginVersion('record') +
                ' and recordrtc ' + RecordRTC.version;
            videojs.log(msg);
        });
        
        // error handling
        player.on('deviceError', function() {
            console.log('device error:', player.deviceErrorCode);
        });
        
        player.on('error', function(element, error) {
            console.error(error);
        });
        
        // user clicked the record button and started recording
        player.on('startRecord', function() {
            console.log('started recording!');
        });
        
        // user completed recording and stream is available
        player.on('finishRecord', function() {
            // the blob object contains the recorded data that
            // can be downloaded by the user, stored on server etc.
            console.log('finished recording: ', player.recordedData);
            player.record().saveAs({'video': 'my-video-file-name.webm'});
        });

        // uploading video
        // player.on('finishRecord', function() {
        //     // the blob object contains the recorded data that
        //     // can be downloaded by the user, stored on server etc.
        //     console.log('finished recording:', player.recordedData);
        
        //     var data = player.recordedData;
        //     var serverUrl = '/upload';
        //     var formData = new FormData();
        //     formData.append('file', data, data.name);
        
        //     console.log('uploading recording:', data.name);
        
        //     fetch(serverUrl, {
        //         method: 'POST',
        //         body: formData
        //     }).then(
        //         success => console.log('recording upload complete.')
        //     ).catch(
        //         error => console.error('an upload error occurred!')
        //     );
        // });

        // 'stream' upload recorded data segments to a server using the jQuery library and the timestamp event:
        // var segmentNumber = 0;

        // player.on('timestamp', function() {
        //     if (player.recordedData && player.recordedData.length > 0) {
        //         var binaryData = player.recordedData[player.recordedData.length - 1];

        //         segmentNumber++;

        //         var formData = new FormData();
        //         formData.append('SegmentNumber', segmentNumber);
        //         formData.append('Data', binaryData);

        //         $.ajax({
        //             url: '/api/Test',
        //             method: 'POST',
        //             data: formData,
        //             cache: false,
        //             processData: false,
        //             contentType: false,
        //             success: function (res) {
        //                 console.log("segment: " + segmentNumber);
        //             }
        //         });
        //     }
        // });
    }, [])

    return ( 
        <Box w={'full'} p={4}>
            <video id="myVideo" className={"video-js vjs-default-skin"} playsInline ></video>
        </Box>
    );
}

export default VideoRecorder;