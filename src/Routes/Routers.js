import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../layouts/Main';
import CardLayout from '../Pages/CardLayout/CardLayout';
import Form from '../Pages/Form/Form';
import Table from '../Pages/Table/Table';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/layout1' element={<Form />}></Route>
                <Route path='/layout2' element={<Table />}></Route>
                <Route path='/layout3' element={<CardLayout />}></Route>
            </Route>
        </Routes>
    );
};

export default Routers;