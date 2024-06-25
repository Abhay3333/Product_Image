import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import HeroSection from './components/Hero/HeroSection'
import Review from './components/Review/Review'
import Recommended from './components/Recommended/Recommended'
import PreFooter from './components/PreFooter/PreFooter'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    < >
    <Navbar/>
    <Product/>
    <HeroSection/>
    <Review/>
    <Recommended/>
    <PreFooter/>
    <Footer/>
    </>
  )
}

export default App