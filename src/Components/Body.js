import React from 'react';
import './Body.css';
const Body=(props)=>{

  return(
    <div className="navigation">
  <div className="banner">
    <img  className="cover"/>


  </div>
  <div class="navLink">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>

      <li>
        <a href="#">Servisec</a>
      </li>

      <li>
        <a href="#">Protofile</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
</div>
  )




}



export default Body;