import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from '../Pages/Form/Form';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Form />}></Route>
        </Routes>
    );
};

export default Routers;