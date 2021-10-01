import React from 'react';
import './Slide.css';
const Slide=(props)=>{
  const classs='navigation  '+props.classactive;
  const removetoggle=()=>{
    let toggleName=document.querySelector('.navigation');
      toggleName.classList.toggle('actives');

  }
  return(
    <div  className={`navigation ${classs}`}>
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
      <li><a className='toggles' onClick={removetoggle}></a></li>
    </ul>
  </div>
</div>
  )




}



export default Slide;