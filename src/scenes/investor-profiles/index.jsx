import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Grid, TextField, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, TablePagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InvestorProfiles = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const investors = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    // Add more investors as needed
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredInvestors = investors.filter(investor => investor.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const goToInvestorProfile = (investorId) => {
    navigate(`/investor/${investorId}`);
  };

  const goToReportGenerator = () => {
    navigate(`/report-generator`); // Adjust the path as necessary
  };

  return (
    <Box p={3} display="flex" gap={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardActionArea onClick={goToReportGenerator} sx={{ flex: 1, position: 'relative' }}>
              <CardMedia
                component="img"
                image="/assets/Report_Generator_Tile.png" // Ensure the path is correct
                alt="Report Generator"
                title="Report Generator"
                sx={{ height: '100%', width: '100%', objectFit: 'cover' }} // Ensures the image covers the entire card area
              />
              <CardContent sx={{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '8px' }}>
                <Typography variant="h5" component="div">
                  Report Generator
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search Investors"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            margin="normal"
          />
          <TableContainer component={Paper} style={{ maxHeight: 440, border: '1px solid rgba(224, 224, 224, 1)' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Investor Name</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredInvestors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((investor) => (
                  <TableRow key={investor.id} hover>
                    <TableCell>{investor.name}</TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" style={{ cursor: 'pointer' }} onClick={() => goToInvestorProfile(investor.id)}>
                        Open Profile
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredInvestors.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvestorProfiles;
