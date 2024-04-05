
"use client"
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import heroImage from "../../Assests/Images/heater-image.svg"
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Hero = () => {
    return (
        <>
            <Box className="flex flex-col lg:flex-row justify-between w-full lg:h-[508px] bg-[#00bf8f]">
                <Box className="flex flex-col justify-center mx-4 lg:mx-24 lg:w-1/2">
                    <Typography className="flex text-2xl text-white font-bold ">Boiler Efficiency Ratings</Typography>
                    <Typography className="text-base font-semibold text-white ">Compare boiler efficiencies & find out if a new boiler could save you money</Typography>
                    <Box className="flex justify-between items-center bg-white w-full h-14 text-[#545454] ">
                        <Typography className="text-semibold text-xs"><SearchIcon />Boiler Name</Typography>
                        <Typography className="border-l-2 border-black"><ExpandMoreIcon />Type</Typography>
                        <Typography className="border-black border-l-2"><ExpandMoreIcon />Manufacturer</Typography>
                        <Box className="bg-[#00bf8f] lg:w-28 h-16 bg-hidden flex items-center text-white justify-center">
                            <Typography>compare</Typography>
                        </Box>
                    </Box>
                    <Typography className="text-white my-5">Keywords: Cmobi, Condensing, Gas, Efficiency 85%</Typography>
                </Box>
                <Box className="py-5 lg:py-11 mx-4 lg:mx-10 lg:w-1/2">
                    <Image src={heroImage} width={248} height={458} />
                </Box>
            </Box>
        </>
    )
}

export default Hero;
