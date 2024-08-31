import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

const Dashboard = () => {
  const navigate = useNavigate();

  const tiles = [
    { name: "Investor Onboarding", img: "/assets/Investor_Onboarding_Tile.png", link: "/investor-onboarding" },
    { name: "Accounting", img: "/assets/Accounting_Tile.png", link: "/accounting" },
    { name: "Account Management", img: "/assets/Account_Management_Tile.png", link: "/account-management" },
    { name: "Fund Onboarding", img: "/assets/Fund_Onboarding_Tile.png", link: "/fund-onboarding" },
    { name: "Investor Profiles", img: "/assets/Investor_Profiles_Tile.png", link: "/investor-profiles" },
    { name: "Treasury", img: "/assets/Treasury_Tile.png", link: "/treasury" },
    { name: "Requests", img: "/assets/Requests_Tile.png", link: "/requests" },
    { name: "Legal", img: "/assets/Legal_Tile.png", link: "/legal" },
    { name: "Calendar", img: "/assets/Calendar_Tile.png", link: "/calendar" }
  ];

  const tileHeight = 200; // Height of the tile in pixels
  const spacing = 16; // Spacing from the theme (theme.spacing(2))

  // Helper function to render a single tile with bottom margin
  const renderTile = (tile, index) => (
    <Grid item xs={12} key={index} style={{ marginBottom: spacing }}>
      <Card>
        <CardActionArea onClick={() => navigate(tile.link)}>
          <Box position="relative">
            <CardMedia
              component="img"
              height={tileHeight}
              image={tile.img}
              alt={tile.name}
            />
            <Box position="absolute" top={0} left={0} right={0} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '8px' }}>
              <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                {tile.name}
              </Typography>
            </Box>
          </Box>
          {/* Move CardContent here if you want additional info under the image */}
        </CardActionArea>
      </Card>
    </Grid>
  );

  return (
    <Box m={3}>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      <Grid container spacing={2}>
        {/* Column 1 */}
        <Grid item xs={12} sm={4}>
          {renderTile(tiles[0], 0)}
          {renderTile(tiles[1], 1)}
          {renderTile(tiles[2], 2)}
        </Grid>
        
        {/* Column 2 */}
        <Grid item xs={12} sm={4}>
          {renderTile(tiles[3], 3)}
          {renderTile(tiles[4], 4)}
          {renderTile(tiles[5], 5)}
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} sm={4}>
          {renderTile(tiles[6], 6)}
          {renderTile(tiles[7], 7)}
          {renderTile(tiles[8], 8)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
