import React from 'react'
import Categories from './Categories'
import Products from './Products'
import Carttotal from './Carttotal'

const Home = () => {
  return (
    <div className='home px-6 flex justify-between gap-10'>
        <div className='categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)]
        pb-64'>
            <Categories/>
        </div>
        <div className='products flex-[8]'>
            <Products/>
        </div>
        <div className='carttotals'>
            <Carttotal/>
        </div>
    </div>
  )
}

export default Home
