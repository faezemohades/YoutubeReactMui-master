import { Box, Stack } from '@mui/material'
import React from 'react'
 import VideoCard from './VideoCard'

function Videos({videos,direction}) {
  if (!videos?.length) return "loading..."
  return (
    <Stack direction={direction ||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, index)=>(
        <Box key={index}>
       {item.id.videoId && <VideoCard video={item}/>}
 
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
