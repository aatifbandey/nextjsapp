import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

const UserPage =(props)=>{
  const { data } = props
  const classes = useStyles();
  return (
   	<div className="main-parent-container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow key={data.name}>
              <TableCell component="th" scope="row">
               <b>Name:</b> {data.name}
              </TableCell>
            </TableRow>
            <TableRow key={data.username}>
              <TableCell component="th" scope="row">
                <b>Username:</b> {data.username}
              </TableCell>
            </TableRow>
            <TableRow key={data.email}>
              <TableCell component="th" scope="row">
                <b>Email:</b> {data.email}
              </TableCell>
            </TableRow>
            <TableRow key={data.phone}>
              <TableCell component="th" scope="row">
                <b>Phone:</b> {data.phone}
              </TableCell>
            </TableRow>
            <TableRow key={data.address.zipcode}>
              <TableCell component="th" scope="row">
                <b>Address:</b> {data.address.suite}, {data.address.street}, {data.address.city}- {data.address.zipcode}
              </TableCell>
            </TableRow>
            <TableRow key={data.company.name}>
              <TableCell component="th" scope="row">
                <b>Company:</b> {data.company.name}, 
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );  
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: {data} 
  }
}
export default UserPage;
