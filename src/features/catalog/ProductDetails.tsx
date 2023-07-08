import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

export default function ProductDetails(){
    
    const {productId} = useParams<{productId: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5142/api/Product/GetProductByIdView?id=${productId}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [productId])

    if(loading) return <h3>Loading...</h3>

    if(!product) return <h3>Product not found</h3>

    return(
        <Typography variant="h2">
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <img 
                        src={process.env.PUBLIC_URL + '/images/' + product.produitPhoto} 
                        alt={product.produitLibelle} 
                        style={{width: '100%', height: '100%'}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h3">{product.produitLibelle}</Typography>
                    <Divider sx={{mb: 2}} />
                    <Typography variant="h4" color="secondary">€{product.produitPrix}</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Libelle</TableCell>
                                    <TableCell>{product.produitLibelle}</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>{product.produitDescription}</TableCell>
                                    <TableCell>Categorie</TableCell>
                                    <TableCell>{product.categoryNom}</TableCell>
                                    <TableCell>Createur</TableCell>
                                    <TableCell>{product.produitCreatorId}</TableCell>

                                    {/* for size and quantity, make a search to implement it */}
                                    <TableCell>Taille</TableCell>
                                    <TableCell>{product.produitTailleId}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Typography>
    )
}