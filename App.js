import React from "react"
import data from "./data"
import Card from "./components/Card"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App(){
    const cards = data.map(item=>{
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="container">
        <Header/>
        <main className="card--element">
        {cards}
        </main>
        <Footer/>
        </div>
    )
}