import React from 'react'
import TopPicks from './TopPicks'
import Dilevery from './Dilevery'
import Hero from './Hero'

const Home = ({handleAdd}) => {
  return (
    <div>
      <Hero/>
      <Dilevery/>
      <TopPicks handleAdd={handleAdd}/>
    </div>
  )
}

export default Home
