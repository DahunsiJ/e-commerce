import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from "./styles"

// const regex = /( |<([^>]+)>)/gi;
const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardMedia className={classes.media}
            component="img"
            height="140"
            image={product.image.url}
            alt=""
          />
          <CardContent>
            <div className={classes.cardContents}>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h6" >
                {product.price.formatted_with_symbol}
              </Typography>
            </div>
            
            <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="text.secondary" />
              {/* {product.description.replace(regex,'')}
            </Typography> */}
          </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton arial-label="Add to Cart" onClick={ () => onAddToCart(product.id, 1) }>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
  );
}
            
export default Product;

