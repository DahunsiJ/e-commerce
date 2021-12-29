import React from 'react';
import {useState, useEffect } from "react"

import { Typography, Card, CardActions, Button, CardContent, CardMedia } from '@mui/material';

import useStyles from "./styles";

const CartItem = ({ item, onUpdateCaryQty, onRemoveFromCart }) => {
    const classes = useStyles();

    const [price, setPrice] = useState(item.price.raw)

    useEffect(() => {
         setPrice(price * item.quantity)
    }, [onUpdateCaryQty]);
 

    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{ '$' + price }</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCaryQty( item.id, item.quantity - 1) }>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCaryQty( item.id, item.quantity + 1) }>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart( item.id )}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
