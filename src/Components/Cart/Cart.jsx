import React from 'react';
import { Container, Button, Grid, Typography } from '@mui/material';

import useStyles from './styles';
import CardItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your Shopping Cart, 
        <Link to="/" className={classes.link}> Start adding some now!</Link>
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3} >
                {cart.line_items.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CardItem item={item} onUpdateCaryQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div gutterBottom>
                    <Button className={classes.emptyButton} gutterBottom size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty Cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="../checkout" gutterBottom size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )
    if(!cart.line_items) return("loading...");
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom >Your Shopping Cart</Typography>
            {!cart.line_items.length? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
