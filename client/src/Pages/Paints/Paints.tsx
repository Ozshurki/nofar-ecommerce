import React, {useContext,useEffect, useState} from "react";
import {ProductInt} from "../../Shared/Interfaces/Product-int";
import Products from "../../Components/Products/Products";
import axios from "axios";
import {LoaderContext} from "../../Shared/Context/LoaderContext";


interface Props {
    productName: string;
}

const Paints: React.FC<Props> = (props) => {

    const [products, setProducts] = useState<ProductInt[]>([]);
    const loaderCtx = useContext(LoaderContext)

    const updateProducts = (products: ProductInt[]) => setProducts(products);

    const getPaints = async () => {

        try {
            console.log(loaderCtx?.isLoader)
            loaderCtx?.toggleLoader();
            const response = await axios.get("http://localhost:5000/api/products/paints");
            loaderCtx?.toggleLoader();
            console.log(loaderCtx?.isLoader)
            const paints = response.data["paints"];
            setProducts(paints);
        } catch (err) {
            console.log(err);
        }

    };

    useEffect(() => {

        getPaints();

    }, []);

    return (
        <Products productName={props.productName}
                  products={products}
                  setProducts={updateProducts}/>
    );
};

export default Paints;