import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Table = () => {

    // loaded users data
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="overflow-x-auto mt-8">
            <h1 className='text-3xl font-semibold text-center mb-8'>Table Data</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, idx) =>
                            <tr className="hover">
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.dob}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;