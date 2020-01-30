import React, { useContext } from 'react';
import { Button } from 'react-onsenui';
import { BatterContext } from '../contexts/BatterContext';

const Dashboard = () => {
    const {hitHandler, strikeHandler, ballHandler, foulHandler} = useContext(BatterContext);
    return (
        <>
            <Button onClick={hitHandler}>Hit</Button>
            <Button onClick={strikeHandler}>Strike</Button>
            <Button onClick={ballHandler}>Ball</Button>
            <Button onClick={foulHandler}>Foul</Button>
        </>
    );
};

export default Dashboard;
