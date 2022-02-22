import React, {useEffect} from "react";
import "./Product.css";
import ProductsKind from "../../Components/Products/ProductsKind/ProductsKind";
import ProductDetails from "../../Components/Products/ProductDetails/ProductDetails";

interface Props{
    productName: string;
}

const Product: React.FC<Props>= (props) => {

    useEffect(() =>{
        console.log("in product")
    })
    return (
        <div className="product-page">
            <ProductsKind productName={props.productName}/>
            <ProductDetails productName={props.productName}/>
        </div>
    );
};

export default Product;