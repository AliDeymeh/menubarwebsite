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
        <a href="#">خانه</a>
      </li>
      <li>
        <a href="#">درباره ما</a>
      </li>

      <li>
        <a href="#">سرویس ها</a>
      </li>

      <li>
        <a href="#">نمونه کار</a>
      </li>
      <li>
        <a href="#">ارتباط با ما</a>
      </li>
      <li><a className='toggles' onClick={removetoggle}></a></li>
    </ul>
  </div>
</div>
  )




}



export default Slide;