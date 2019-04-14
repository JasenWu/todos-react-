import React, { Component } from 'react';
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
export default SearchBar