import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import Swal from 'sweetalert2';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
        Swal.fire({
            icon: 'success',
            title: 'Student seleceted sucessfully',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h6 style={{fontSize:"18px",margin:"5px 0",textAlign:"left",color:"#333"}}>{product.title}</h6>
                    <p style={{fontSize:"14px",margin:"0",textAlign:"left",color:"#666"}}>Loaction <strong>{product.createdBy}</strong></p>
                    <p style={{fontSize:"14px",margin:"0",textAlign:"left",color:"#666"}}>Age <strong>{product.price} Year</strong></p>
                    <p style={{fontSize:"14px",margin:"0",textAlign:"left",color:"#666"}}>Enrolled-on <strong>{product.createdAt}</strong></p>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Select
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
