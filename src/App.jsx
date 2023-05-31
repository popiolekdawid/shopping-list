import './App.css'
import { useState } from "react"

import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

function App() {
  const [products, setProducts] = useState(
    [ 
        {
            "id": 1,
            "name": "mleko", 
            "category": "dairy", 
            "quantity": 1
        }, {
            "id": 2,
            "name": "chleb", 
            "category": "bread", 
            "quantity": 5
        }, {
            "id": 3,
            "name": "pomarańcze", 
            "category": "fruits", 
            "quantity": 4
        } 
    ]
  )

  const addProduct = (product) => {
    const id = products.length + 1
    const newProduct = { id, ...product } 
    setProducts([...products, newProduct])
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div className='App'>
      <Header title="Lista Zakupów"/>
      <AddProduct onAdd={addProduct}/>
      {products.length > 0 ? <Products products={products} onDelete={deleteProduct}/>:<p>Brak produktów</p>}
    </div>
  )
}

export default App
