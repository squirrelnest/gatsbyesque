import React from "react"
import Header from "../components/header"

export default function Home() {
  return ( 
    <div> 
      <Header headerText="Hello there! This is a header."/>
      <p>Much wow. So React.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
