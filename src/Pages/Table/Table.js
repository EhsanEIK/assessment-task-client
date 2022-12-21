import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto mt-8">
            <h1 className='text-3xl font-semibold text-center mb-8'>Table Data</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>Purple</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;