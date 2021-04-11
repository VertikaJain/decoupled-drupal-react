import React from 'react'

const Product = (props) => {
    const { product } = props;
    return <div className="content">
        <img src={"http://localhost:8888" + product.field_product_image} alt="product" />
        <h3>{product.title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>₹{product.field_price}</h6>
        <ul>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
        </ul>
        <button className="buy-1">Buy Now</button>
    </div>
}

export default Product
