
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import cardData from "../../services/BlogData/Blogdata"; // Import your card data

const Blog = () => {
  return (
    <Box className="flex flex-col justify-center items-center">
      <Typography className='text-bold mt-5 text-2xl' variant='h6'>Blogs</Typography>
      <Typography className='font-normal mt-2 text-sm' variant='h6'>Find out if you're eligible for help with your heating</Typography>
      <Box className="flex flex-wrap justify-center mt-4 items-center">
        {/* Mapping through cardData and creating cards */}
        {cardData?.map((item, index) => (
          <Card className="rounded-md" key={index} sx={{ minWidth: 275, margin: 2, p: 1 }}>
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
        ))}
      </Box>
      <Button className="bg-[#009F78] hover:bg-green-400 my-4 rounded-md" variant="contained" disableElevation>
        Browse All Blogs
      </Button>
    </Box>
  );
}

export default Blog;
