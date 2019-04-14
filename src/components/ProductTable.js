import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
class ProductTable extends Component {
 
  render() {
    return (<section className='layout_list_wrap'>
      <ProductCategoryRow title="Sporting Goods" />
      <ProductRow stocked={this.props.stocked} result={this.props.result} />
      <ProductCategoryRow title="Electronics" />
      <ProductRow  stocked={this.props.stocked} result={this.props.result} />
    </section>)
  }
}

export default ProductTable