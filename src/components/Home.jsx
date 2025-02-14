import React from 'react'
import Card from './Card'

const Home = () => {
  return (
    <div  className='flex flex-wrap justify-center md:justify-between'>
      <Card name="MacBook" price={100000} url="https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card name="Lenovo" price={65000} url="https://images.pexels.com/photos/1359327/pexels-photo-1359327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card name="Samsung" price={35000} url="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/g/z/y/-original-imaghufz2jt46n8v.jpeg?q=90&crop=false" />
      <Card name="Vivo Y15" price={15000} url="https://www.zebrs.com/uploads/zebrs/products/4-949977933008358_l.jpg" />
    </div>
  )
}

export default Home
