import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    function handleBudgetChange(value) {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <div style={{ display: 'inline-flex'}}>Budget: { currency }
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ size: 4}}
                        onChange={(event) => handleBudgetChange(event.target.value)}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            }
                        }}
                        />
            </div>

        </div>
    );
};
export default Budget;