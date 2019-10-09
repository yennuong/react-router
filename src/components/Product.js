import React, { Component } from 'react';

class Product extends Component {
    render() {
        let {match} = this.props;
        let name = match.params.name;
        return (
            <div className="row">
                daylatrangchitietsanpham {name}
            </div>
        );
    }
}

export default Product;
