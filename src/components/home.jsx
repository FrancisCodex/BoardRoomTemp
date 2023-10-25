import React from 'react'
import Featuredcard from './cards/featuredcard'
import Navbar from './navbar/navbar'
import Hero from './home/hero'
import FeaturedList from './home/featuredlist'
import Card from './cards/card'
import Cardtest from './cards/cardtest'
export default function Home() {

  const properties = [
    {
      id: 1,
      title: "Property 1",
      description: "3 bedroom 1 bathroom apartment",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 500,
      persons: 3,
      bathrooms: 1,
      floors: 1,
      type: "Apartment",
      renter: "Donald Trump"

    },
    {
      id: 2,
      title: "Property 2",
      description: "2 bedroom 2 bathroom deluxe apartment",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 482.23,
      persons: 2,
      bathrooms: 2,
      floors: 2,
      type: "Deluxe Apartment",
      renter: "Gerald Oswalt"
    },
    {
      id: 3,
      title: "Property 2",
      description: "2 bedroom 2 bathroom apartment",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 482.23,
      persons: 2,
      bathrooms: 2,
      floors: 2,
      type: "Boarding House",
      renter: "Gerald Oswalt asdas"
    },
  ];

  return (
    <div>
        <Navbar/>
        <div className='h-screen bg-slate-300'>
            <Hero/>
            <hr />
        </div>

        {/* Listing Featured Properties */}
        <div className="h-screen bg-orange-200 flex flex-col justify-center items-center">
          <h1 className='text-3xl'>Featured Listings</h1>
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            {properties.map((property) => (
              <Card key={property.id} property={property} />
            ))}
          </div>
        </div>
        
        <div className="h-screen footer">
          <h1 className='text-black'>This will be the footer</h1>
        </div>
    </div>
  )
}
