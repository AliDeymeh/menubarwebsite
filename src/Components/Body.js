import React,{useState} from 'react';
import './Body.css';
import './Slide.css';
import Slide from './Slide';
import ImgSlide from './ImgSlide';
import SoshalMedia from './SoshalMedia';
class Body extends React.Component{
  state={   
    showPersons:true
  }
  handelShowPersons=()=>{
    this.setState({showPersons:!this.state.showPersons});
  
  }

  render(){
    const {showPersons}=this.state;
    let person=null;
    const c='active';
    if(!showPersons){
      person=<Slide classactive={c}></Slide>;    
        
    }

    return (
    
     <div> <section className="sec">
      
     <header>
   <div className="toggle" onClick={this.handelShowPersons}></div>
   {person}
   <a href="#" className="btn">برو بریم</a>
   
   </header>
   
  </section>
 <div className="imgslide">
   <ImgSlide></ImgSlide>
 </div>
 <footer>
 <SoshalMedia></SoshalMedia>
 </footer>
 </div>

   
        );
  }
}
export default Body;

