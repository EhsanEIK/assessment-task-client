import React from 'react';

const Form = () => {
    return (
        <div className='mt-8'>
            <table>
                <tr>
                    <td>
                    </td>
                    <td>
                        <h1 className='text-3xl font-semibold ml-10 mb-3'>Form Fill Up</h1>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="name" className="label-text text-lg">Full Name:</label>
                    </td>
                    <td>
                        <input type="text" placeholder="enter your name" name='name' className="input input-bordered w-[300px] ml-10" required />
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        <label htmlFor="dateOfBirth" className="label-text text-lg">Date of Birth:</label>
                    </td>
                    <td>
                        <input type="date" placeholder="" name="dateOfBirth" className="input input-bordered w-[300px] ml-10" required />
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        <label htmlFor="email" className="label-text text-lg">Email:</label>
                    </td>
                    <td>
                        <input type="email" placeholder="enter your email" className="input input-bordered w-[300px] ml-10" required />
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        <label htmlFor="phone" className="label-text text-lg">Phone Number:</label>
                    </td>
                    <td>
                        <input type="text" placeholder="enter your phone number" name='phone' className="input input-bordered w-[300px] ml-10" required />
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <button className='btn btn-primary btn-sm float-right mt-5'>Submit</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Form;