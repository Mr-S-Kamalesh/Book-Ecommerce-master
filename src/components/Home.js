import React from "react";
import list from '../Data';
import BookCard from './BookCard';
import './Card.css'

const Home=()=>{
         return (
    <section>
        <div className="container">
            <div className="row mt-2">
        {
            list.map((item)=>{
                // console.log(item)
               return <BookCard key={item.id} item={item}/>
                })
        }
         </div>
        </div>
        <h2> Copyright © {new Date().getFullYear()} Kamalesh</h2>
    </section>
  )
}

export default Home