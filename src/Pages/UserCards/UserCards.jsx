import React, { useEffect, useState } from 'react';
import AddUser from '../AddUser/AddUser';
import AllCards from './AllCards';


const UserCards = () => {
    const [userdata, setUserdata] = useState([]);
    const [localData, setLocalData] = useState([]);
    const [localDataTemp, setLocalDataTemp] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [switchSearch, setSwitchSearch] = useState([]);

    const [sortBy, setSortBy] = useState("");
    // const [dataFromLocalStorage, setdataFromLocalStorage] = useState(localStorage.getItem('data'));


    useEffect(() => {
        fetch(`https://dummyjson.com/users`)
            .then(res => res.json())
            .then(data => {
                setUserdata(data.users);
                localStorage.setItem('data', JSON.stringify(data.users));
            })
            .catch(error => console.error(error))


    }, []);



    useEffect(() => {
        // Fetch existing data from local storage
        const dataFromLocalStorage = localStorage.getItem('data');
        if (dataFromLocalStorage) {
            setLocalData(JSON.parse(dataFromLocalStorage));
            setSwitchSearch(localData);
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

    useEffect(() => {

        const searchTemp = localData.filter(value => value.firstName.toLowerCase().includes(searchValue.toLowerCase()));

        setLocalDataTemp(searchTemp);
        // console.log(switchSearch);
        if (searchValue != "" || searchValue != "") {
            setSwitchSearch(localDataTemp)
        }
        else {
            setSwitchSearch(localData);
        }

    }, [searchValue, localData]);

    // Function to handle sorting based on the selected option
    useEffect(() => {
        if (sortBy) {
            // Clone the array to avoid mutating the original array
            const sortedData = [...localData].sort((a, b) => {
                if (sortBy === 'name') {
                    return a.firstName.localeCompare(b.firstName);
                } else if (sortBy === 'email') {
                    return a.email.localeCompare(b.email);
                } else if (sortBy === 'company') {
                    return a.company.name.localeCompare(b.company.name);
                }
                return 0;
            });
            setLocalData(sortedData);
        }
    }, [sortBy]);


    return (
        <div>
            <div className='rounded-lg bg-slate-800 py-6'>
                <div className='text-center'>
                    <h1 className='text-6xl text-white my-4 font-bold'>Users</h1>
                </div>

                <div className='form-control p-5'>
                    <div className='text-center'>
                        <input
                            type="text"
                            onChange={(e) => {
                                const value = e.target.value;

                                setSearchValue(value);
                            }}
                            value={searchValue}
                            placeholder="Search by Name..."
                            className='input input-bordered w-72 me-4'
                        />

                        <select value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)} className="select select-accent w-52 max-w-xs mt-2 bg-cyan-400 text-white font-bold">
                            <option defaultValue>Sort By</option>
                            <option value="name" className='font-semibold'>Name</option>
                            <option value="email" className='font-semibold'>Email</option>
                            <option value="company" className='font-semibold'>Company Name</option>
                        </select>

                    </div>

                </div>
                <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 '>
                    {
                        switchSearch.map((task) => (
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