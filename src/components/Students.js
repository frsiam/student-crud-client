import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import StudentRow from './StudentRow';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [isReload, setIsReload] = useState(false);
    useEffect(() => {
        fetch('https://arcane-thicket-42090.herokuapp.com/students')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                return setStudents(data.result)
            })
    }, [isReload])
    return (
        <div className='container my-5'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Name</th>
                        <th scope="col">Father Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Religion</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((stu, index) => <StudentRow isReload={isReload} setIsReload={setIsReload} key={index} stu={stu} index={index} />)
                    }
                </tbody>
            </table>
            <div className='text-center mt-5'>
                <Link to='/addnewstudentinfo' className="btn btn-dark">Add New Student</Link>
            </div>
        </div>
    );
};

export default Students;