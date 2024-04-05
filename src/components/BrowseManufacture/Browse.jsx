"use client"
import { Typography,Box,Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import browse from "../../../public/browse.svg"
const Browse = () => {
  return (
<>
<Box>
    <Box className="flex flex-col justify-center items-center">
        <Typography className='font-bold text-2xl'> Browse Top Manufactures</Typography>
        <Typography className='font-normal text-sm'>Find the boiler that fits your needs from the top renowned manufacturers</Typography>
        <Typography className='font-normal text-sm'>liked by hundreds of consumers.</Typography>
        <Image className='w-full h-[417px]' src={browse} alt="Browse" />
        <Button className="bg-[#009F78] hover:bg-green-400 my-4 rounded-md" variant="contained" disableElevation>
        Browse Maufacturers
    </Button>
    </Box>
</Box>

</>
  )
}


export default Browse