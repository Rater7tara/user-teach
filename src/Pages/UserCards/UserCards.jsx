import React, { useEffect, useState } from 'react';
import AddUser from '../AddUser/AddUser';
import AllCards from './AllCards';


const UserCards = () => {
    const [userdata, setUserdata] = useState([]);
    const [localData, setLocalData] = useState([]);
    const[dataFromLocalStorage,setdataFromLocalStorage] = useState(localStorage.getItem('data'));


    useEffect(() => {
        fetch(`https://dummyjson.com/users`)
            .then(res => res.json())
            .then(data => {
                setUserdata(data.users);
                localStorage.setItem('data', JSON.stringify(data.users));
            })
            .catch(error => console.error(error))

           
        }, []);
    
    // useEffect(() => {
        
    //     if (dataFromLocalStorage) {
    //         setLocalData(JSON.parse(dataFromLocalStorage));
    //     }
    // }, [dataFromLocalStorage]);


    
    useEffect(() => {
        // Fetch existing data from local storage
        const dataFromLocalStorage = localStorage.getItem('data');
        if (dataFromLocalStorage) {
            setLocalData(JSON.parse(dataFromLocalStorage));
        }
    }, []);

    const handleAddUser = (newUserData) => {
        // Prepend new user data to existing data
        const updatedData = [newUserData, ...localData];
        // Update local storage with the updated data
        localStorage.setItem('data', JSON.stringify(updatedData));
        // Update state with the updated data
        setLocalData(updatedData);
    };
    


   
    

    return (
        <div>
            <div className='rounded-lg bg-slate-800 py-6'>
                <div className='text-center'>
                    <h1 className='text-6xl text-white my-4 font-bold'>Users</h1>
                </div>
                <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 '>
                {
  localData.map((task) => (
    <AllCards
      key={task.id}
      task={task}
    ></AllCards>
  ))
}
                </div>
            </div>





            <AddUser onAddUser={handleAddUser} />
        </div>
    );
};

export default UserCards;