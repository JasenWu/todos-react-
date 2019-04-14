import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';



class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    let datas = [
      { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
      { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
      { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];
    this.datas = datas
  }
  render() {
    return (
      <section className='layout_pro_table'>
        <p><img className='i_logo' alt = 'logo' src={logo} /></p>
        <SearchBar />
        <ProductTable result={this.datas} />
      </section>

    )
  }
}

class SearchBar extends Component {
  render() {
    return (
      <section className='layout_search_wrap'>
        <input className='i_input' placeholder='search' type='text' />
        <section className='i_des' >
          <input type="checkbox" />
          <span>only show products in stocks</span>
        </section>
      </section>
    )
  }
}


class ProductTable extends Component {
  // constructor(props){
  //   super(props)

  // }
  render() {
    return (<section className='layout_list_wrap'>
      <ProductCategoryRow title="Sporting Goods" />
      <ProductRow result={this.props.result} />
      <ProductCategoryRow title="Electronics" />
      <ProductRow result={this.props.result} />

    </section>)
  }
}


class ProductCategoryRow extends Component {
  render() {
    return (
      <h4 className='layout_category_row'>{this.props.title}</h4>
    )
  }
}

class ProductRow extends Component {
  render() {
    let datas = this.props.result;

    return (<ul className='layout_row'>
      {datas.map((v, k) => {
        return (<li key={k}>
          <span className='i_name'>
            {v.name}
          </span>
          <span className='i_price'>
            {v.price}
          </span>

        </li>)
      })}
    </ul>)
  }
}



export default FilterableProductTable;
