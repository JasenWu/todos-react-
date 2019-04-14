import React, { Component } from 'react';
class ProductCategoryRow extends Component {
  render() {
    return (
      <h4 className='layout_category_row'>{this.props.title}</h4>
    )
  }
}

export default ProductCategoryRow