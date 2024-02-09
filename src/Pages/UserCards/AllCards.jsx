import React from 'react';

const AllCards = ({ task }) => {
    const {image, firstName, lastName, company, address, email} = task;



    return (
        <div>
                  <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat mt-5">
                      <img src={image} className="imgAll" />
                  </div>
  
                  <div className="card-body text-white items-center text-center" >
                      <h2 className="card-title">{firstName}</h2>
                      <h2>{lastName}</h2>
                      <h2>{company.name}</h2>
                      <p>{address.city}</p>
                      <p>{address.address}</p>
                      <p>{address.postalCode}</p>
                      <p>{email}</p>

                      
                     
                    
                      <div className="card-actions justify-center">
                      </div>
                  </div>
              </div>
    );
};

export default AllCards;