import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';


const SingleCard = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Retrieve user data from localStorage based on the ID
        const data = JSON.parse(localStorage.getItem('data'));
        const user = data.find(user => user.id === parseInt(id));
        setUserData(user);
    }, [id]);

    if (!userData) {
        return <Loading></Loading>;
    }

    const { image, firstName, lastName, company, address, email } = userData;

    return (
        <div className='max-w-xl justify-center mx-auto my-10'>
            <div className="relative p-6 shadow-md rounded-lg" style={{ background: "linear-gradient(to bottom, #06BCC5 50%, #ffffff 50%)" }}>
                <div className="absolute top-0 left-0 right-0 flex justify-center mt-5" >
                    <img src={userData.image} alt={`${firstName} ${lastName}`} className="w-44 h-44 rounded-full border-4  border-white shadow-md" />
                </div>

                <div className="mt-48 text-center">
                    <h2 className="text-xl font-semibold text-white mb-2">{userData.firstName} {userData.lastName}</h2>

                </div>
                <div className='flex justify-around mt-4 pt-4'>
                    <h2 className="text-xl font-bold text-black mb-2">First Name: <span className='text-gray-600'>{userData.firstName}</span></h2>
                    <h2 className="text-xl font-bold text-black mb-2">Last Name: <span className='text-gray-600'>{userData.lastName}</span> </h2>
                </div>
                <p className='text-gray-600 text-center mt-2'><span className='font-bold'>Email:</span>  {userData.email}</p>
                <div className="">
                    <h3 className="text-gray-700 font-bold mb-2">Address</h3>
                    <p className='flex flex-col'>
                        <span>{userData.address.address},</span>


                        <span>City: {userData.address.city},</span>
                        <span>Postal Code: {userData.address.postalCode}</span>
                    </p>

                </div>
                <div className="mt-4">
                    <h3 className="text-gray-700 font-bold mb-2">Company Name</h3>
                    <p>{company.name}</p>
                </div>
            </div>
        </div>

    );
};

export default SingleCard;