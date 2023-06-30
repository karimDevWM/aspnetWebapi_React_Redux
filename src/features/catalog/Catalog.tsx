import { Fragment } from "react";
import { Product } from "../../app/models/product";
import { 
    Button
} from "@mui/material";
import ProductList from "./ProductList";

interface Props {
    products: Product[];
    addProduct: () => void;
}

// props get properties from parent component to his childs
export default function Catalog({products, addProduct}: Props) {
    
    return (
        <Fragment>
            <ProductList products={products} />
            <Button variant="contained" onClick={addProduct}>Add product</Button>
        </Fragment>
    )
}