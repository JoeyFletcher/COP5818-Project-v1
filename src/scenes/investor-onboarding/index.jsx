import React, { useState } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, TextField, Typography, Paper, Autocomplete, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InvestorOnboarding = () => {
  const navigate = useNavigate();

  const funds = [
    { label: 'All Funds', id: 'all' },
    { label: 'Fund Alpha', id: 1 },
    { label: 'Fund Beta', id: 2 },
    { label: 'Fund Gamma', id: 3 }
  ];

  const [statusFilter, setStatusFilter] = useState({
    completed: false,
    pending: true,
    dropped: false,
    postClose: false
  });
  const [selectedFund, setSelectedFund] = useState(funds[0]); // Default to 'All Funds'
  const [searchName, setSearchName] = useState('');

  const investors = [
    { name: 'John Doe', status: 'Pending', fund: 'Fund Alpha', closingDate: '2023-04-15', investorId: 1 },
    { name: 'Jane Smith', status: 'Completed', fund: 'Fund Beta', closingDate: '2023-01-22', investorId: 2 },
    { name: 'Alice Johnson', status: 'Dropped', fund: 'Fund Gamma', closingDate: '2023-03-30', investorId: 3 }
  ];

  const handleStatusChange = (event) => {
    setStatusFilter({ ...statusFilter, [event.target.name]: event.target.checked });
  };

  const handleFundChange = (_, newValue) => {
    setSelectedFund(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const openInvestorDetails = (investorId) => {
    // Navigate to a specific route for the investor's detailed onboarding page
    navigate(`/investor-details/${investorId}`);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Investor Onboarding Management
      </Typography>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={statusFilter.completed} onChange={handleStatusChange} name="completed" />}
          label="Completed"
        />
        <FormControlLabel
          control={<Checkbox checked={statusFilter.pending} onChange={handleStatusChange} name="pending" />}
          label="Pending"
        />
        <FormControlLabel
          control={<Checkbox checked={statusFilter.dropped} onChange={handleStatusChange} name="dropped" />}
          label="Dropped"
        />
        <FormControlLabel
          control={<Checkbox checked={statusFilter.postClose} onChange={handleStatusChange} name="postClose" />}
          label="Post-Close"
        />
      </FormGroup>
      <Autocomplete
        options={funds}
        value={selectedFund}
        onChange={handleFundChange}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Select Fund" />}
      />
      <TextField
        label="Search by Investor Name"
        fullWidth
        value={searchName}
        onChange={handleSearchChange}
        margin="normal"
      />

      {/* Investor Table */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Investor Name</TableCell>
            <TableCell>Fund</TableCell>
            <TableCell>Closing Date</TableCell>
            <TableCell>Action</TableCell> {/* Added a new column for actions */}
          </TableRow>
        </TableHead>
        <TableBody>
          {investors.filter(inv => inv.name.toLowerCase().includes(searchName.toLowerCase()) && (selectedFund.id === 'all' || inv.fund === selectedFund.label)).map((inv, index) => (
            <TableRow key={index}>
              <TableCell>{inv.status}</TableCell>
              <TableCell>{inv.name}</TableCell>
              <TableCell>{inv.fund}</TableCell>
              <TableCell>{inv.closingDate}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => openInvestorDetails(inv.investorId)}>
                  Open
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default InvestorOnboarding;
