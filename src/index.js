import React from 'react';
import ReactDom from 'react-dom';

import { List } from './fonc';
import { itm } from './list';
import { click } from './click';
import { click2 } from './click2';

import './s.css';


function Greeting(){
   
  return  (
            <section > 
               <p>test</p>
               {itm.map((i) => {
               return <List list={i} > </List>
            }
            )
            }
             <button type='button' onClick={click} className="cl">
               alt
            </button>
            <button type='button' onClick={click2} className="cl">
               console
            </button>
            </section>
          );
}


    
  


ReactDom.render(<Greeting/>,document.getElementById('root'));