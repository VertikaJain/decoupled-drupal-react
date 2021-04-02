import React, { useState, useEffect } from 'react'

const url = "https://course-api.com/javascript-store-products"

const Products = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await (await fetch(url)).json()
        setProducts(response)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="product">
            {products.map(product => {
                return <article key={product.id} >
                    <img src={product.fields.image[0].url} />
                    <h3>{product.fields.name}</h3>
                    <p>₹{product.fields.price}</p>
                </article>
            })}
        </div>
    )
}

export default Products
