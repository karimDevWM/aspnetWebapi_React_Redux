import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props){
    return(
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.produitLibelle.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.produitLibelle}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
            <CardMedia
                sx={{ height: 250, backgroundSize: 'contain' }}
                image={process.env.PUBLIC_URL + '/images/' + product.produitPhoto}
                title={product.produitLibelle}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    €{product.produitPrix.toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.produitDescription.length > 30 ?
                        `${product.produitDescription.substring(0, 20)}...` : product.produitDescription
                    }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}