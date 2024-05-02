import React from 'react'
import { Navbar, Welcome, Footer, Services } from "../components";
function Home() {
  
  return (
    <div className="min-h-screen ">
    <div className="bg-red-900">
      <Navbar display={false}/>
      <Welcome />
    </div>
    <div className="bg-red-900">

      <Services />

      <Footer />
    </div>

  </div>
  )
}

export default Home
