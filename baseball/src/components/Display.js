import React, {useContext} from 'react';
import { BatterContext } from '../contexts/BatterContext'
const Display = () => {
    const {hit, strike, ball, foul, outs} = useContext(BatterContext);
    return ( <>
    <p>Hits: {hit}</p> 
    <p>Stikes: {strike}</p> 
    <p>Balls: {ball}</p> 
    <p>Fouls: {foul}</p> 
    <p>Outs: {outs}</p> 
    </>
    );
}
 
export default Display;
