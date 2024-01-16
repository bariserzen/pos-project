import React from 'react'

const Carttotals = () => {
  return (
    <div className='cart h-full max-h-[calc(100vh_-_90px)] flex flex-col'>
      <h2 className='bg-blue-600 text-center py-4 text-white font-bold'>
       Sepetteki Ürünler</h2>
      <div className='cart-items'>
        <div className='cart-item'>cart item</div>
      </div>
      <div className="cart-totals">
        <div>
          <div className='flex justify-between'>
            <b>Ara Toplam</b>
            <span>99 TL</span>
          </div>
        </div>
      </div>

      
      
    </div>
  )
}

export default Carttotals
