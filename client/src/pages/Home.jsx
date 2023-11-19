import React from 'react'
import { Navbar, Welcome, Footer, Services } from "../components";
function Home() {
  console.log(process.env.REACT_APP_PINATA_SECRET_KEY)
  return (
    <div className="min-h-screen ">
    <div className="gradient-bg-welcome">
      <Navbar display={false}/>
      <Welcome />
    </div>
    <div className="gradient-bg-services">

      <Services />

      <Footer />
    </div>

  </div>
  )
}

export default Home
