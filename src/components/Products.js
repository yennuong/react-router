import React, { Component } from 'react';
import {Route,NavLink} from "react-router-dom";
import Product from "./Product"

class Products extends Component {
    render() {
        let products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'iphone x',
                price: 3500
            },
            {
                id: 2,
                slug: 'samsung-x',
                name: 'samsung x',
                price: 3500
            },
            {
                id: 1,
                slug: 'oppo-x',
                name: 'oppo x',
                price: 3500
            }
        ];
        let {match} = this.props;
        let url = match.url;
        console.log(match);
        let result = products.map((product,index)=>{
            return(
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        });

        return (
            <div className="container">
                <h1>Danh Sach San Pham</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path ="/products/:name" component={Product} />
                </div>
            </div>
        );
    }
}

export default Products;
