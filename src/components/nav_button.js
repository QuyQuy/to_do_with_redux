import React from 'react ';
import { Link } from 'react-router-dom';

export default props => (
    <div className='row'>
       <div  className=".col.s12.right-align">
           <Link className={`btn ${props.color || 'green accent-2'}`} to={props.to} >{props.children}</Link>
       </div>
    </div>
);


