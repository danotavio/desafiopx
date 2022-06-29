import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QrCodeIcon from '@mui/icons-material/QrCode';
import IconButton from '@mui/material/IconButton';
import { Chip, InputAdornment } from '@mui/material';
import './table.css';
import Pagination from '@mui/material/Pagination';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'white',
    color: '#424242',
    borderBottom: '.1rem solid #FF7E2E',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id: number,
  destiny: string,
  value: string,
  dateSolicitation: string,
  deadlinePayment: string,
  paymentForm: string,
  status: string,
) {
  return {id, destiny, value, dateSolicitation, deadlinePayment, paymentForm, status};
}

const rows = [
  createData(4145, 'Despesa', 'R$50,00', '28/02/2022 23:30', 'PIX/TED','28/02/2022','Em Pagamento'),
];



export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius:'1rem' }}>
    <Box sx={{ display: 'flex', gap:'2rem', alignItems:'center',justifyContent:'space-between', padding: '1rem'}}>
        <div style={{display:'flex', alignItems:'center',justifyContent:'center', gap:'3rem'}}>
            <Input id="allSearch" type="search" placeholder="Pesquisar Data" variant="filled" endAdornment={ <InputAdornment position="end"> <SearchIcon /> </InputAdornment> } />       
            <Input id="searchDate" type="search" placeholder="Pesquisar Data" variant="standard" endAdornment={ <InputAdornment position="end"> <CalendarMonthIcon /> </InputAdornment> }/>
        </div>
        <div style={{padding:'1rem'}}>
          <Button variant="contained" disableElevation> 
          Adicionar Saldo
          </Button>
        </div>
      </Box>
      
      <Table sx={{ minWidth: 700,}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Destino</StyledTableCell>
            <StyledTableCell align="left">Valor</StyledTableCell>
            <StyledTableCell align="left">Solicitação</StyledTableCell>
            <StyledTableCell align="left">Forma Pgto.</StyledTableCell>
            <StyledTableCell align="left">Vencimento</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">  </StyledTableCell>
            <StyledTableCell align="left">  </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                <StyledTableCell align="left">{row.destiny}</StyledTableCell>
                <StyledTableCell align="left">{row.value}</StyledTableCell>
                <StyledTableCell align="left">{row.dateSolicitation}</StyledTableCell>
                <StyledTableCell align="left">{row.deadlinePayment}</StyledTableCell>
                <StyledTableCell align="left">{row.paymentForm}</StyledTableCell>
                <StyledTableCell align="left">
                    <Chip label={row.status} color="info" />
                </StyledTableCell>
                <StyledTableCell align="left"> 
                    <IconButton color="primary" aria-label="Copy">
                        <ContentCopyIcon />
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell align="left"> 
                    <IconButton color="primary" aria-label="QR Code">
                        <QrCodeIcon/>
                    </IconButton>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
          <Pagination count={1} sx={{display: 'flex',justifyContent:'center', height: '10rem',}}/>
    </TableContainer>
    
  );
}
