import React from "react"
import "../styles/globals.css";
import Hero from "./Hero";
import ParticleEffect from "./ParticleEffect";

export default function App(){
    return(
        <div >
            <ParticleEffect />
            <Hero/>
        </div>
    )
}