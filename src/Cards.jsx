import './style.css'
import './App.css'



import React from 'react';

const Cards = (props) => {
    console.log(props)
    
    return (
        <div className={props.cols}>
      
          
            <div className='card-s '>
                <div className='mt-2 salebtn '  >
                <button className='sale'>{props.sale?"Sale":"Soldout"}</button>
                </div>
                <img src={props.images} className='image-card'/>
                <h1>{props.heading}</h1>
                <p>{props.price}</p>
                <div className='text-center'>
                <button className='btns'>Add to cart</button>
                </div>

         
         

          </div>

       

            
        </div>
    );
};

export default Cards;