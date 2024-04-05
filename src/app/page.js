"use client"
import Benifit from '@/components/BeniCard/Benifit'
import Blog from '@/components/Blog/Blog'
import Browse from '@/components/BrowseManufacture/Browse'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import News from '@/components/News/News'
import Quotes from '@/components/Quotes/Quotes'
import React from 'react'

const page = () => {
  return (
<>
<main>
  <div className="flex flex-col justify-center ">
    <Navbar/>
    <Hero/>
    <Blog/>
    <News/>
    <Benifit/>
    <Browse/>
    <Quotes/>
    <Footer/>
  </div>
</main>
</>
  )
}

export default page