import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';


const Header = (props) => {
    
    return (
           
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} >

            <Typography variant='h5'>
                Dio Shopping
            </Typography>
            <Link to="/">
                <Button color="Default">Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="Default">Contact</Button>
            </Link>
            <Cart />


        </Grid>
        
    )
}

export default Header;
