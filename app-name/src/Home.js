import React from 'react'
import './Home.css'
import Product from './Product.js';
function Home() {
  return (
    <div className='home' id='home'> 
      <div className="app">
      <div className="home" id="home">
  <div className="home_container">
  <img className="home_img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34424535-c82f-42d2-9d73-d55105493f58/d5wommr-da40044c-62fc-43fa-8bcb-66960ca066d6.jpg/v1/fill/w_900,h_603,q_75,strp/reading_in_the_morning_by_ta_moe_d5wommr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvMzQ0MjQ1MzUtYzgyZi00MmQyLTlkNzMtZDU1MTA1NDkzZjU4XC9kNXdvbW1yLWRhNDAwNDRjLTYyZmMtNDNmYS04YmNiLTY2OTYwY2EwNjZkNi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.JgSQ4OcvcqihKYc8hrRRXFudRXdlDloQJXYEr6de1rE"/>

  <div className="home_row">
    <Product 
    id={24001}
    title='The Great Gatsby by F. Scott Fitzgerald: Gatsbys obsession to reunite with his former lover' 
    price={50.78} 
    image='https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
    rating={5}
    />
    <Product title='The Great Gatsby by F. Scott Fitzgerald: Gatsbys obsession to reunite with his former lover' 
    price={50.78} 
    image='https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
    rating={5}
    />
  </div>
  <div className="home_row">
    <Product 
    id={24002}
    title='The Great Gatsby by F. Scott Fitzgerald: Gatsbys obsession to reunite with his former lover' 
    price={50.78} 
    image='https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
    rating={5}
    />
    <Product 
    id={24003}
    title='The Great Gatsby by F. Scott Fitzgerald: Gatsbys obsession to reunite with his former lover' 
    price={50.78} 
    image='https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
    rating={5}
    />
    <Product 
    id={24004}
    title='The Great Gatsby by F. Scott Fitzgerald: Gatsbys obsession to reunite with his former lover' 
    price={50.78} 
    image='https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
    rating={5}
    />
  </div>
  <div className="home_row">
  <Product 
    id={24005}
    title='The Great Gatsby by F. Scott Fitzgerald: Gatsbys obsession to reunite with his former lover' 
    price={50.78} 
    image='https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
    rating={5}
    />
  </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Home
