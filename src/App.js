import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
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
      stocked:true
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

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state={
      sarchValue:'',
      checked:true,
    }
  }
  handerChange(e){
    let v = e.target.value || ''
    this.setState({
      searchValue:v
    })
    this.props.handerChangeValue(v)
  }
  handerChangeCheck(e){
    let v = !e.target.value || ''
   
    this.setState({
      checked:v
    })
    this.props.handerChangeCheck(v)
  }

  render() {
    return (
      <section className='layout_search_wrap'>
        <input className='i_input' onChange={this.handerChange.bind(this)} defaultValue={this.state.sarchValue} placeholder='search' type='text' />
        <section className='i_des' >
          <input onChange={this.handerChangeCheck.bind(this)} defaultChecked={true} defaultValue={this.state.checked} type="checkbox" />
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
      <ProductRow stocked={this.props.stocked} result={this.props.result} />
      <ProductCategoryRow title="Electronics" />
      <ProductRow  stocked={this.props.stocked} result={this.props.result} />
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
    let curData = []
    if(!this.props.stocked){
     
      curData = datas.filter((v,k)=>{
        return v.stocked === true
      })
    }else{
      curData = datas
    }

    console.log('curData',curData)

    return (<ul className='layout_row'>
      {curData.map((v, k) => {
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
