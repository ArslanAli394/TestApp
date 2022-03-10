import React from 'react';
 
const Button = ({...otherprops,children}) =>{
    return (
        <button {...otherprops}>
            {
                children
            }
        </button>
    )
}
export default Button;
