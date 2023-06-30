import { Fragment, useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, Typography } from "@mui/material";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=> {
    fetch('http://localhost:5142/api/Product')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => 
      [...prevState, 
        {
          produitId: prevState.length + 101,
          produitLibelle: "product" + (prevState.length + 1),
          produitPhoto: "http://picsum.photos/200",
          produitDescription: "some description",
          produitCategoryId : 1,
          produitTailleId: 1,
          produitCreatorId: 1, 
          produitPrix: (prevState.length * 100) + 100
        }
      ]
    )
  }

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container>
        {/* this component is a child of App component */}
        <Catalog products={products} addProduct={addProduct}/>
      </Container>
    </Fragment>
  );
}

export default App;
