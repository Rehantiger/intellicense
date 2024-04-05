
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Newsdata from "../../services/NewsData/Newsdata";

const News = () => {
  return (
    <Box className="flex flex-col justify-center items-center">
      <Typography className='text-bold mt-5 text-2xl' variant='h6'>News & Updates</Typography>
      <Typography className='font-normal mt-2 text-sm' variant='h6'>Explore UK's energy news and updates</Typography>
      <Carousel
        autoPlay={true}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={2000}
        emulateTouch={true}
        centerSlidePercentage={26}
        centerMode={true}
        
      >
        {Newsdata?.map((item, index) => (
          <div key={index}>
            <Card className="rounded-md" sx={{ minWidth: 275, margin: 2, p: 1 }}>
              <CardMedia
                component="img"
                className='w-[289px] h-[192px]'
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography className="text-xs font-bold" variant="" component="">
                  {item.title}
                </Typography>
                <Typography className="font-normal text-xs" variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-line' }}>
                  {item.description}
                </Typography>
                <Typography className="font-bold text-sm text-black my-4" variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-line' }}>
                  {item.read}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default News;
