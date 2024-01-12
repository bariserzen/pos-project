import React from 'react'
import Categories from './Categories'
import Products from './Products'
import Carttotal from './Carttotal'

const Home = () => {
  return (
    <div className='home px-6 flex justify-between'>
        <div className='categories'>
            <Categories/>
        </div>
        <div className='products'>
            <Products/>
        </div>
        <div className='carttotals'>
            <Carttotal/>
        </div>
    </div>
  )
}

export default Home
