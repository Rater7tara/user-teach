import React from 'react';
import { Link } from 'react-router-dom';

const AllCards = ({ task }) => {
    const { image, firstName, lastName, company, address, email, id } = task;



    return (
        <div>
            <div className='bg-white rounded-lg text-black'>
                <div className="rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat justify-center mx-auto">
                    <img src={image} className="w-60 h-60 mt-4" />

                    <Link to={`/singleUser/${id}`}><span className="absolute bottom-2 right-0 left-20 top-auto z-10 inline-block rotate-0 p-2.5 bg-cyan-500 hover:bg-cyan-700 text-md text-white font-bold">{firstName} {lastName}</span></Link>


                </div>
                <p className='text-black text-center'><span className='font-bold'>Email:</span>  {email}</p>

                <div className="card-body text-black" >
                    <div className="mt-3">
                        <h3 className="text-gray-700 mb-2 font-bold">Address</h3>
                        <p>{address.address}, {address.postalCode}, {address.city}</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-gray-700 font-bold mb-2">Company Name</h3>
                        <p>{company.name}</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AllCards;