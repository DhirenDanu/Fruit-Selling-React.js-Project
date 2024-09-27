import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Menus from './components/menus/Menus'
import Banner from './components/banner/Banner'
import Banner2 from './components/banner/Banner2'
import Banner3 from './components/banner/Banner3'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Menus/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Footer/>


    </main>
    </>
  )
}

export default App
