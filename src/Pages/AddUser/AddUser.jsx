import React from 'react';

const AddUser = () => {


    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const image = form.image.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const company = form.company.value;
        const address = {
            address: form.address.value,
            city: form.city.value,
            postalCode: form.postalCode.value
        };
        console.log(email, image, firstName, lastName, company, address);
        const existingDataString = localStorage.getItem('data');

        // Parse the retrieved JSON string into a JavaScript object
        const existingData = JSON.parse(existingDataString);

        // New user data to be added
        const newUser = {
            "id": existingData.length + 1,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "image": image,
            "company": company,
            "address": address
        };

        // Add the new user to the existing data
        existingData.push(newUser);

        // Stringify the modified JavaScript object
        const updatedDataString = JSON.stringify(existingData);

        // Store the updated JSON string back into localStorage
        localStorage.setItem('data', updatedDataString);
    }



    return (
        <div className=" p-10 md:flex justify-center ">

            <form className='form md:w-2/4 sm:w-full bg-base-200 p-10 rounded' onSubmit={handleAddUser}>
                <h2 className="text-4xl font-extrabold text-center mt-2 mb-2">Add A User</h2>
                {/* form toy name and row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* form last name row */}
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* form email row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="email" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                {/* {form address row} */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name="address" placeholder="Street" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="label-text">Postal Code</span>
                        </label>
                        <input type="text" name="postalCode" placeholder="Postal Code" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="label-text">City</span>
                        </label>
                        <input type="text" name="city" placeholder="City" className="input input-bordered w-full" />
                    </div>
                    
                </div>



                {/* form company row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="company" placeholder="Company" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form avatar row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Avatar</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Avatar" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add user" className="btn bg-cyan-500 hover:bg-cyan-700 btn-block" />

            </form>
        </div>
    );
};

export default AddUser;