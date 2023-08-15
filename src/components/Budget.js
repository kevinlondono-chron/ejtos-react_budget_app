import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [bud, setBud] = useState(budget);
 
    const validateBudget = (event, b) => { 
        if(parseInt(b) > 20000) {
            alert("The value can not exceed £20.000");
            return;
        } 
        
        else if (parseInt(b) < 960){
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
 
        setBud(b)
        
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: $ </span>
            <input
                type='number'
                id='budget'
                step="10"
                value={bud}
                onChange={(event) => validateBudget(event, event.target.value)}
                max="20000"
            />
        </div>
    );
};
export default Budget;
