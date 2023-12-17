import React from 'react'
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState ,useEffect } from 'react';
import { ProductService } from './ProductService';
const Child = () => {
    const[data,setdata] = useState([]);
    
     useEffect(()=>{
        ProductService.getProducts().then(data => setdata(data));
     },[]);
  return (
    <div>
      <DataTable value={data}>
        <Column field='code' header='Code'></Column>
        <Column field='name' header='Name'></Column>
        <Column field='category' header='Category'></Column>
        <Column field='quantity' header='Quantity'></Column>
      </DataTable>
    </div>
  )
}

export default Child;