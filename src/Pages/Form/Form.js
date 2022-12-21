import React from 'react';
import { toast } from 'react-hot-toast';

const Form = () => {

    // save the information from client side to database
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const dob = form.dob.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const user = { name, dob, email, phone };

        // send the information to the backend server
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Information added successfully.');
                    form.reset();
                }
            })
    }

    return (
        <div className='mt-8'>
            <form onSubmit={handleSubmit}>
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
                            <label htmlFor="dob" className="label-text text-lg">Date of Birth:</label>
                        </td>
                        <td>
                            <input type="date" placeholder="" name="dob" className="input input-bordered w-[300px] ml-10" required />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <label htmlFor="email" className="label-text text-lg">Email:</label>
                        </td>
                        <td>
                            <input type="email" placeholder="enter your email" name='email' className="input input-bordered w-[300px] ml-10" required />
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
                            <button type='submit' className='btn btn-primary btn-sm float-right mt-5'>Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Form;