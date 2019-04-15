import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import logo from '../logo.svg';
let datas = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      datas:JSON.parse(JSON.stringify(datas)),
      stocked:true,
      searchVal:''
    }

  }

  handerChangeValue(v){
     
    let res = []
    datas.forEach((v1,k1)=>{
       
      if(v && (v1.name.toLocaleLowerCase().indexOf(v.toLocaleLowerCase()) > -1)){
        res.push(v1);
      }
    })


    let result = (res && res.length>0) ? res : []
    if(!v || (typeof(v) === 'string' &&  v.trim().length === 0)){
      result = datas 
    }
    
    this.setState({
      datas:
      result
    })

  }
  handerChangeCheck(v){
 
    this.setState({
      stocked:
      v
    })

  }
  
  render() {
    return (
      <section className='layout_pro_table'>
        <p><img className='i_logo' alt = 'logo' src={logo} /></p>
        <SearchBar handerChangeCheck={this.handerChangeCheck.bind(this)} handerChangeValue={this.handerChangeValue.bind(this)} />
        <ProductTable stocked={this.state.stocked} result={this.state.datas} />
      </section>

    )
  }
}

export default FilterableProductTable