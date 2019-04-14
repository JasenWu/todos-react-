import React, { Component } from 'react';

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


export default ProductRow