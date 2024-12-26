import React from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from '../redux/actions/counterActions';

export const Counter = () =>{
    const count=useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();


    return(
        <div>
            <h2>Counter:{count}</h2>
            <button onClick={()=>dispatch(increment())}>INCREMENT</button>
            <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
        </div>
    )
};