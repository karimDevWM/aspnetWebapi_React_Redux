import { Fragment, useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

// props get properties from parent component to his childs
export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5142/api/Product')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Fragment>
            <ProductList products={products} />
        </Fragment>
    )
}