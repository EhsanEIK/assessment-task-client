import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../layouts/Main';
import Form from '../Pages/Form/Form';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/layout1' element={<Form />}></Route>
            </Route>
        </Routes>
    );
};

export default Routers;