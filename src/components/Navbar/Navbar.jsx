
import * as React from 'react';
import { useState, useEffect } from 'react';
import { AppBar, Box, Button, Typography, Drawer } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function CustomAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const ListItemLink = ({ primary }) => (
    <div className="flex items-center justify-between text-gray-700 hover:text-gray-900 cursor-pointer py-2">
      <Typography>{primary}</Typography>
      <ExpandMoreIcon />
    </div>
  );

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 50) {
        // Implement any desired behavior when scrolling
      } else {
        // Implement any desired behavior when scrolling
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box className="flex flex-col justify-center items-center">
      <AppBar className='sticky top-0' position="static">
        <Box className="bg-white dark:bg-gray-800">
          <Box className="flex justify-between items-center px-4 py-2 lg:px-8">
            <Typography className='text-black font-semibold text-lg lg:text-xl' variant="h6" component="div">
              Home Energy
              <span style={{ color: '#7E7E7E', fontSize: '0.75rem' }}><sup>Guide</sup></span>
            </Typography>
            <Box className="sm:hidden">
              <Button onClick={toggleDrawer}>
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </Button>
            </Box>
            <Box className="hidden sm:flex items-center space-x-4">
              <ListItemLink primary="Central Heating" />
              <ListItemLink primary="Grants Schemes" />
              <ListItemLink primary="Energy Efficiency" />
              <ListItemLink primary="UK Energy News" />
              <Button className="hover:bg-green-400" variant="contained" sx={{ backgroundColor: '#009F78', fontSize: '0.75rem' }}>
                Free Boiler Quote
              </Button>
            </Box>
          </Box>
        </Box>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box p={4} width="" role="presentation">
          <ListItemLink primary="Central Heating" />
          <ListItemLink primary="Grants & Schemes" />
          <ListItemLink primary="Energy Efficiency" />
          <ListItemLink primary="UK Energy News" />
        </Box>
      </Drawer>
    </Box>
  );
}

