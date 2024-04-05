
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import fb from "../../../public/Group.png";
import linked from "../../../public/Group (1).png";
import google from "../../../public/Group 37.png";
import twit from "../../../public/Group 34.png";

const Footer = () => {
  return (
    <>
      <Box className="flex flex-col bg-[#2E3538]">
        <Box className="flex flex-col lg:flex-row w-full h-auto lg:h-[337px] py-10 lg:py-0 justify-evenly items-center">
          <Box className="flex flex-col items-center lg:items-start flex-wrap mb-10 lg:mb-0">
            <Typography className='text-white' variant="h6" component="div">
              Home Energy
              <span style={{ color: '#7E7E7E', fontSize: '0.75rem' }}><sup>Guide</sup></span>
            </Typography>
            <Typography className='text-[#C2C2C2] text-xs font-normal'>© 2024, All rights reserved.</Typography>
          </Box>

          <Box className="flex flex-col items-center lg:items-start text-sm flex-wrap mb-10 lg:mb-0">
            <Typography className='text-white my-2'>Explore</Typography>
            <Typography className='text-sm my-2 text-[#C2C2C2]'>Central Heating</Typography>
            <Typography className='text-sm my-2 text-[#C2C2C2]'>Grants & Schemes</Typography>
            <Typography className='text-sm my-2 text-[#C2C2C2]'>Energy Efficiency</Typography>
            <Typography className='text-sm my-2 text-[#C2C2C2]'>UK Energy News</Typography>
          </Box>

          <Box className="flex flex-col items-center lg:items-start flex-wrap mb-10 lg:mb-0">
            <Typography className='text-white my-2'>Support</Typography>
            <Typography className='text-sm my-2 text-[#C2C2C2]'>Help</Typography>
            <Typography className='text-sm my-2 text-[#C2C2C2]'>Support</Typography>
            <Typography className='text-sm my-2 text-[#C2C2C2]'>Privacy</Typography>
            <Typography className='text-sm my-2 text-[#C2C2C2]'>Terms & Conditions</Typography>
          </Box>

          <Box className="flex flex-col items-center lg:items-start flex-wrap ">
            <Typography className='text-white my-2'>Follow Us on:</Typography>
            <Box className="flex">
              <Image className='mx-1' src={fb} alt="Facebook"/>
              <Image className='mx-1' src={linked} alt="LinkedIn"/>
              <Image className='mx-1' src={google} alt="Google"/>
              <Image className='mx-1' src={twit} alt="Twitter"/>
            </Box>
          </Box>
        </Box>

        <Box className="flex justify-center items-center border-t-2 border-[#C2C2C2]">
          <Typography className='my-6 text-[#C2C2C2] font-normal text-sm'>Powered by Intelliscence</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer;
