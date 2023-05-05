import { useState, useEffect } from 'react';
import Employee_details from './widgets/Employee-details';
import axios from "axios";
import { AiOutlineUserAdd } from "react-icons/ai";

const Employees = () => {
    const [data,setData] = useState([]);
    const [empData, setEmpData] = useState(data);
    const [showModal, setShowModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [searchString, setSearchString] = useState('');

    const openModal = (e) => {
        setShowModal(true);
        setSelectedEmployee(e);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://niraj-dasari-musical-engine-jw6pv6w76q5fj5r7-5000.preview.app.github.dev/employees");
            setData(result.data);
            setEmpData(result.data);
            console.log(result)
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (showModal) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [showModal]);

    const filterEmp = () => {
        setEmpData(empData.filter(item => item['Employee Name'].toLowerCase().includes(searchString.toLowerCase())))
        console.log(empData);
    }

    const handleChange = (event) => {
        setSearchString(event.target.value);
        if (event.target.value) {
            setEmpData(data)
        }
        console.log(searchString);
    }

    return (
        <div className="">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Employees</h1>
                        <div class="flex w-full justify-center">
                            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                                <input type="text" onChange={handleChange} value={searchString} id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-orange-200 focus:bg-transparent focus:border-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg" onClick={() => filterEmp()}>Search</button>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-2">
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer">
                                    <div className="h-full flex items-center border-orange-200 border p-4 rounded-lg bg-orange-200">
                                        <div className="w-16 h-16 bg-orange-100 object-cover object-center flex justify-center items-center flex-shrink-0 rounded-full mr-4">
                                            <AiOutlineUserAdd style={{ fontSize: '24px' }}/>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">Employee name</h2>
                                            <p className="text-gray-500">Employee email</p>
                                        </div>
                                    </div>
                                </div>
                        {
                            empData.map((d) => (
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer" onClick={() => openModal(d['Emp Code'])} >
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">{d['Employee Name']}</h2>
                                            <p className="text-gray-500">{d['Employee Email']}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {showModal && (
                            <div className="fixed z-10 inset-0 overflow-y-auto">
                                <div className={`flex items-center justify-center min-h-screen fixed inset-0 bg-black bg-opacity-50 ${showModal ? 'backdrop-blur' : ''}`}>
                                    <Employee_details onClose={closeModal} emp={empData.filter(e => e['Emp Code'] == selectedEmployee)[0]} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Employees;