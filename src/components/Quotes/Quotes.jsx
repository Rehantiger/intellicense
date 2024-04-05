
import React, { useRef, useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import group from "../../../public/Group 29.png";
import girl from "../../../public/image-meg 1.svg";

const Quotes = () => {
  const girlRef = useRef(null);
  const animationControls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    girlRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // useEffect hook to trigger the animation when the component mounts
  useEffect(() => {
    if (!hasAnimated) {
      animationControls.start({ opacity: 1, y: 0 });
      setHasAnimated(true);
    }
  }, [hasAnimated, animationControls]);

  return (
    <>
      <Box className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center bg-[#EEEEEE] w-full lg:h-[495px] relative">
        <Box className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start flex-wrap mb-8 lg:mb-0">
          <Image className="" src={group} alt="group"/>
          <Typography className='font-bold text-2xl text-black '>Get Boiler Quotes</Typography>
          <Typography className='font-bold text-xl my-2'>Compare price today</Typography>
          <Typography className="font-normal text-sm">No Obligation to buy</Typography>
          <Typography className="font-normal text-sm my-2">Visit Our Guide to get free quotes from trustworthy heating engineers in your area.</Typography>
          
          {/* Ensuring the input field and button are properly aligned and responsive */}
          <Box className="flex flex-col md:flex-row justify-center items-center mt-4">
            <Typography className="bg-white w-60 px-5 py-1 h-[36px] text-center">
              Enter Postcode
            </Typography>
            <Button className="bg-[#009F78] hover:bg-green-400 rounded-md mx-2 mt-4 md:mt-0" variant="contained" onClick={scrollToTop}>Get Quotes</Button>
          </Box>
        </Box>
        <motion.div 
          className="flex justify-center items-center w-full lg:w-auto" 
          ref={girlRef}
          initial={{ opacity: 0, y: 100 }}
          animate={animationControls}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image className='w-full sm:w-3/4 lg:w-full max-h-[450px]' src={girl} alt="img_girl"/>
        </motion.div>
      </Box>
    </>
  );
};

export default Quotes;
