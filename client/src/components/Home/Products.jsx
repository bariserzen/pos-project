import React from 'react'

const Products = () => {
  return (
    //grid grid-cols-card 'card' comes into tailwind.config.js
    <div className='products-wrapper grid grid-cols-card gap-4'> 
      <div className='product-item border hover:shadow-lg cursor-pointer 
      translation-all select-none'>
        <div className='product-img'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17MXwKlHgBgT_LU_OpFS8j8bwMzjdeuJPOA&usqp=CAU' 
               alt=''
               className='h-28 object-cover w-full border-b'/>
        </div>
        <div className="product-info flex flex-col p-3">
          <span className='font-bold'>Elma</span>
          <span>12 TL</span>
        </div>
      </div>
      
    </div>
  )
}

export default Products
