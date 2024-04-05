// import { Typography, Box, Button } from '@mui/material'
// import React from 'react'

// const Benifit = () => {
//   return (
//     <>
//       <Box className="flex justify-evenly items-center w-full h-[226px] my-8 bg-[#00BF8F] flex-wrap ">


//         <Box className="flex flex-col justify-center ">
//           <Typography className='text-white font-bold text-2xl'>Apply for ECO4 Scheme if you are on UK Gov benefits.</Typography>
//           <Typography className='text-white font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id malesuada erat, et vestibulum<br />
//             ex. Praesent porta accumsan ex sed interdum.</Typography>
//         </Box>
     
//           <Button className="hover:bg-green-400" variant="contained" sx={{ backgroundColor: '#009F78', fontSize: '0.75rem' }}>
//             Free Boiler Quote
//           </Button>
       
//       </Box>
//     </>
//   )
// }

// export default Benifit
import { Typography, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Benifit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const windowHeight = window.innerHeight;
      const elementTop = document.getElementById('benifit').getBoundingClientRect().top;
      const isVisible = elementTop < windowHeight - 100;
      
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);

  return (
    <>
      <motion.div // Wrap your container with motion.div
        id="benifit"
        className="flex justify-evenly items-center w-full h-[226px] my-8 bg-[#00BF8F] flex-wrap "
        initial={{ opacity: 0, y: 50 }} // Initial animation properties
        animate={controls} // Animation properties to apply when component is visible
        transition={{ duration: 0.5 }} // Transition duration
      >
        <motion.div // Wrap your content with motion.div
          className="flex flex-col justify-center "
          whileHover={{ scale: 1.05 }} // Animation properties to apply on hover
        >
          <Typography className='text-white font-bold text-2xl'>Apply for ECO4 Scheme if you are on UK Gov benefits.</Typography>
          <Typography className='text-white font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id malesuada erat, et vestibulum<br />
            ex. Praesent porta accumsan ex sed interdum.</Typography>
        </motion.div>
        <motion.div // Wrap your button with motion.div
          whileHover={{ scale: 1.1 }} // Animation properties to apply on hover
        >
          <Button className="hover:bg-green-400" variant="contained" sx={{ backgroundColor: '#009F78', fontSize: '0.75rem' }}>
            Free Boiler Quote
          </Button>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Benifit;
