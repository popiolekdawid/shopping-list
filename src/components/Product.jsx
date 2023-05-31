/* eslint-disable react/prop-types */
import { useState } from "react"
import { FiX } from "react-icons/fi";
import { GiFruitBowl, GiSlicedBread, GiMilkCarton } from "react-icons/gi";

const Product = ({ product, onDelete }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className='product'>
            <div className='product-info'>
                <div className='input-name'>
                    <div className='input-checkbox'>
                        <input 
                            type='checkbox' 
                            value={isChecked}
                            // eslint-disable-next-line no-unused-vars
                            onChange={(e) => setIsChecked(!isChecked)}
                            required
                        />
                    </div>
                    <p className={isChecked ? 'checked' : ''}>{product.name}</p> 
                </div>
                <p>{product.quantity}</p> 
            </div>
            <div className='product-icons'>
                {product.category === 'fruits' ? <GiFruitBowl /> : ""}
                {product.category === 'dairy' ? <GiMilkCarton /> : ""}
                {product.category === 'bread' ? <GiSlicedBread /> : ""}
            </div>
            <div className='product-icons'>
                <FiX onClick={() => onDelete(product.id)}></FiX>
            </div>
        </div>
    ) }

export default Product